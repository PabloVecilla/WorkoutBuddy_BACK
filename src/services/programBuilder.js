// input 
        // {
        //     "goal": "muscle_gain",
        //     "level": "beginner",
        //     "frequency": 3
        // }

const { findExercisesByMovementPattern } = require("./exercise.service");

const goalRules = { // --> generates a rulebase for sets, reps, rest and cardio based on goal rules
    muscle_gain: {
        sets: 4,
        reps: "8-12",
        restSeconds: 90,
        cardioMinutes: 10,
    },

    fat_loss: {
        sets: 3,
        reps: "12-15",
        restSeconds: 60,
        cardioMinutes: 30,
    },

    strength: {
        sets: 5,
        reps: "3-6",
        restSeconds: 180,
        cardioMinutes: 0,
    },

    recomp: {
        sets: 3,
        reps: "8-12",
        restSeconds: 75,
        cardioMinutes: 20,
    },
};


const programTemplates = {  // depending on user level, aglutinates programs (workout split) based on the given frequency
    beginner: {
      2: ["full_body", "full_body"],
      3: ["full_body", "full_body", "full_body"],
      4: ["upper", "lower", "upper", "lower"],
    },
  
    intermediate: {
      3: ["full_body", "upper", "lower"],
      4: ["upper", "lower", "upper", "lower"],
      5: ["push", "pull", "legs", "upper", "lower"],
      6: ["push", "pull", "legs", "push", "pull", "legs"],
    },
};

const workoutBlueprints = {  // exercise category selection for each workout
    push: [
      "horizontal_press",
      "vertical_press",
      "horizontal_adduction",
      "shoulder_abduction",
      "elbow_extension",
    ],
  
    pull: [
      "vertical_pull",
      "horizontal_pull",
      "shoulder_horizontal_abduction",
      "elbow_flexion",
      "shoulder_shrug",
    ],
  
    legs: [
      "squat_pattern",
      "hip_hinge",
      "knee_extension",
      "knee_flexion",
      "calf_flexion",
    ],
  
    upper: [
      "horizontal_press",
      "vertical_pull",
      "horizontal_pull",
      "shoulder_horizontal_abduction",
      "horizontal_adduction",
    ],
  
    lower: [
      "squat_pattern",
      "hip_hinge",
      "glute_flexion",
      "calf_flexion",
    ],
  
    full_body: [
      "squat_pattern",
      "horizontal_press",
      "vertical_pull",
      "hip_hinge",
      "spinal_flexion",
    ],
};

const getRandomItem = (items) => {  
  return items[Math.floor(Math.random() * items.length)];
};
   
  const selectExercise = async (movementPattern) => {  // randomly select an exercise for each category matching user level
    const pool = await findExercisesByMovementPattern(movementPattern);
  
    if (!pool || pool.length === 0) {
      return {
        name: "Exercise not available yet",
        movementPattern,
        equipment: null,
      };
    }
  
  /*   const levelAppropriate = pool.filter((exercise) => {  // if the user level is beginner: show beginner exercises; else: show all; 
      if (level === "beginner") {
        return exercise.level === "beginner";
      }
  
      return true;
    }); */
  
    return getRandomItem(/* levelAppropriate.length > 0 ? levelAppropriate :  */pool);
};

const generateExercisesForWorkout = async (focus, goalRule, hasCardio) => {
  const movementPatterns = workoutBlueprints[focus]; 
  const exercises = await Promise.all(
    movementPatterns.map(async (pattern, index) => {
      const selectedExercise = await selectExercise(pattern); 

      return {
        exerciseId: selectedExercise.id,
        order: hasCardio ? index + 2 : index + 1,
        movementPattern: pattern,
        name: selectedExercise.name,
        equipment: selectedExercise.equipment,
        sets: goalRule.sets,
        reps: goalRule.reps,
        restSeconds: goalRule.restSeconds,
      }
    })
  ); // end Promise.all

  if (hasCardio) {
    // adds cardio if it belongs to user's program  
    const selectedCardio = await selectExercise("cardio"); 

    exercises.unshift({
      exerciseId: selectedCardio.id,
      order: 1, 
      category: "cardio",
      name: selectedCardio.name,
      equipment: selectedCardio.equipment,
      sets: 1,
      reps: `${goalRule.cardioMinutes} min`,
      restSeconds: 0
    });
  }
  return exercises; 
}

const generateProgram = async ({ name, goal, level, frequency }) => {
    const goalRule = goalRules[goal];  // extracts the rule for the user's goal f.ex: user picks "strength", then goal rule = sets: 4, reps: "8-12",restSeconds: 90, cardioMinutes: 10...
    const programTemplate = programTemplates[level]?.[frequency]; // if user = beginner & frequency = 2 --> program = [fullBody, fullBody];
    
    if (!goalRule)  throw new Error("Invalid goal"); 

    if (!programTemplate)   throw new Error("No Program available for this level and frequency");

    const hasCardio = goalRule.cardioMinutes > 0; 

    const generatedWorkouts = await Promise.all(
      programTemplate.map(async (focus, dayIndex) => { 
        const exercises = await generateExercisesForWorkout(focus, goalRule, hasCardio); 

        return {  //returns exercises for a given day with a given focus
            dayNumber: dayIndex + 1,
            focus,
            exercises,
        };
      })
    ); // end Promise.all()
    return {
      name, 
      goal, 
      level, 
      frequency, 
      workouts: generatedWorkouts
    }
};

// generateProgram({ goal: "strength", level: "beginner", frequency: 2 })
// console.log(generateProgram({goal: "muscle_gain", level: "intermediate", frequency: 3})); 

module.exports = {
generateProgram,
};


