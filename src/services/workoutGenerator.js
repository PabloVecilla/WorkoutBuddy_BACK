// input 
        // {
        //     "goal": "muscle_gain",
        //     "level": "beginner",
        //     "frequency": 3
        //   }

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
      3: ["push", "pull", "legs"],
      4: ["upper", "lower", "upper", "lower"],
      5: ["push", "pull", "legs", "upper", "lower"],
      6: ["push", "pull", "legs", "push", "pull", "legs"],
    },
};

const workoutBlueprints = {  // exercise category selection for each workout
    push: [
      "horizontal_press",
      "vertical_press",
      "chest_isolation",
      "side_delt",
      "triceps",
    ],
  
    pull: [
      "vertical_pull",
      "horizontal_pull",
      "rear_delt",
      "biceps",
      "upper_back",
    ],
  
    legs: [
      "squat_pattern",
      "hip_hinge",
      "quad_isolation",
      "hamstring_curl",
      "calves",
    ],
  
    upper: [
      "horizontal_press",
      "vertical_pull",
      "horizontal_pull",
      "side_delt",
      "arms",
    ],
  
    lower: [
      "squat_pattern",
      "hip_hinge",
      "glutes",
      "hamstring_curl",
      "calves",
    ],
  
    full_body: [
      "squat_pattern",
      "horizontal_press",
      "vertical_pull",
      "hip_hinge",
      "core",
    ],
};

const exercisePools = {  // (test --> later fetch from api) -- selection of exercises in each category
    cardio: [
        { name: "Incline Treadmill Walk", level: "beginner",equipment: "treadmill" },
        { name: "Stationary Bike", level: "beginner", equipment: "bike" },
        { name: "Rowing Machine", level: "intermediate", equipment: "machine" },
        { name: "Jump Rope", level: "intermediate", equipment: "bodyweight" },
        { name: "Stair Master", level: "intermediate", equipment: "bodyweight" },
      ],
    horizontal_press: [
      { name: "Machine Chest Press", level: "beginner", equipment: "machine" },
      { name: "Bench Press", level: "intermediate", equipment: "barbell" },
      { name: "Dumbbell Bench Press", level: "beginner", equipment: "dumbbells" },
    ],
  
    vertical_pull: [
      { name: "Lat Pulldown", level: "beginner", equipment: "machine" },
      { name: "Pull-up", level: "intermediate", equipment: "bodyweight" },
    ],
  
    squat_pattern: [
      { name: "Leg Press", level: "beginner", equipment: "machine" },
      { name: "Goblet Squat", level: "beginner", equipment: "dumbbell" },
      { name: "Back Squat", level: "intermediate", equipment: "barbell" },
    ],
  };

  const getRandomItem = (items) => {  
    return items[Math.floor(Math.random() * items.length)];
  };
  
  const selectExercise = (category, level) => {  // randomly select an exercise for each category matching user level
    const pool = exercisePools[category];
  
    if (!pool || pool.length === 0) {
      return {
        name: "Exercise not available yet",
        category,
        equipment: null,
      };
    }
  
    const levelAppropriate = pool.filter((exercise) => {  // if the user level is beginner: show beginner exercises; else: show all; 
      if (level === "beginner") {
        return exercise.level === "beginner";
      }
  
      return true;
    });
  
    return getRandomItem(levelAppropriate.length > 0 ? levelAppropriate : pool);
};
  
const generateProgram = ({ goal, level, frequency }) => {
    const goalRule = goalRules[goal];  // extracts the rule for the user's goal f.ex: user picks "strength", then goal rule = sets: 4, reps: "8-12",restSeconds: 90, cardioMinutes: 10...
    const program = programTemplates[level]?.[frequency]; // if user = beginner & frequency = 2 --> program = [fullBody, fullBody];

    if (!goalRule) {
        throw new Error("Invalid goal");
    }

    if (!program) {
        throw new Error("No Program available for this level and frequency");
    }

    return program.map((focus, index) => { 
        const categories = workoutBlueprints[focus]; // extracts categories for each workout in the user's program. F.ex: fullBody: ["squat_pattern","horizontal_press","vertical_pull","hip_hinge","core"] 
        const hasCardio = goalRule.cardioMinutes > 0; 

        const exercises = categories.map((category) => {
        const selectedExercise = selectExercise(category, level); // Extracts exercises matching category, f.ex: "squat_pattern" --> "leg_press"; 

        return {
            order: hasCardio ? index + 2 : index + 1,
            category,
            name: selectedExercise.name,
            equipment: selectedExercise.equipment,
            sets: goalRule.sets,
            reps: goalRule.reps,
            restSeconds: goalRule.restSeconds,
        };
        });

        if (hasCardio) {  // adds cardio if it belongs to user's program  
        
            const selectedCardio = selectExercise("cardio", level)
            exercises.unshift({
                order: 1, 
                category: "cardio",
                name: selectedCardio.name,
                equipment: selectedCardio.equipment,
                sets: 1,
                reps: `${goalRule.cardioMinutes} min`,
                restSeconds: 0
            });
        }

        return {  //returns exercises for a given day with a given focus
        dayNumber: index + 1,
        focus,
        exercises,
        };
    });
};

module.exports = {
generateProgram,
};


