const axios = require("axios"); 
require("dotenv").config(); 

const classifyExerciseMovementPattern = (exercise) => {
    const name = exercise.name?.toLowerCase() || "";
    const muscle = exercise.primaryMuscles?.[0]?.name?.toLowerCase() || "";
  
    if (name.includes("lateral raise") || name.includes("upright row")) return "shoulder_abduction";
    if (name.includes("rear delt") || name.includes("reverse fly") || name.includes("face pull") || name.includes("reverse butterfly")) return "shoulder_horizontal_abduction";
    if (muscle.includes("shoulder") && name.includes("front raise")) return "shoulder_flexion";
    if (muscle.includes("shoulder") && name.includes("press") || name.includes("militar") ) return "vertical_press"; 
    if (muscle.includes("back") && name.includes("pull up") || name.includes("pull-up") || name.includes("pull down") || name.includes("pull-down") || name.includes("pulldown") || name.includes("pullover") || name.includes("pushdown straight")) return "vertical_pull";
    if (muscle.includes("back") && name.includes("row")) return "horizontal_pull";
    if (name.includes("shrug")) return "shoulder_shrug";
    if (muscle.includes("back") && name.includes("extension")) return "back_extension";

    if (muscle.includes("chest") && name.includes("press") || name.includes("push")) return "horizontal_press";
    if (muscle.includes("chest") && name.includes("fly") || name.includes("pec-deck") || name.includes("butterfly")) return "horizontal_adduction";
    if (name.includes("dips")) return "vertical_push"
    if (muscle.includes("biceps")) return "elbow_flexion";
    if (muscle.includes("triceps")) return "elbow_extension";
    if (muscle.includes("quadriceps") || muscle.includes("quads") && name.includes("extension")) return "knee_extension";
    if (muscle.includes("quadriceps") || muscle.includes("quads") && name.includes("press") || name.includes("squat")) return "squat_pattern";
    if (muscle.includes("hamstring") && name.includes("curl")) return "knee_flexion";
    if (muscle.includes("adductor")) return "hip_adduction"; 
    if (muscle.includes("abductor")) return "hip_abduction"; 
    if (name.includes("deadlift") || name.includes("good morning")) return "hip_hinge"
    if (muscle.includes("glute")) return "glute_flexion";
    if (muscle.includes("calves")) return "calf_flexion";
    if (muscle.includes("abs") || muscle.includes("abdominals") || muscle.includes("obliques") || muscle.includes("core")) return "spinal_flexion";
  
    return "general";
  };
  
  const normalizeWorkoutApiExercise = (exercise) => {
    const url = "https://api.workoutapi.com/exercises"; 
    const imageUrl = `${url}/${exercise.id}/image`; 

    return {
      externalId: String(exercise.id),
      source: "workoutapi",
      name: exercise.name,
      muscle: exercise.primaryMuscles?.[0]?.name ?? null,
      secondaryMuscle: exercise.secondaryMuscles?.[0]?.name ?? null,
      movementPattern: classifyExerciseMovementPattern(exercise),
      equipment: exercise.categories?.[0]?.name ?? null,
      complexity: exercise.types?.[0].name ?? null,
      imageUrl,
      instructions: exercise.description ?? null,
      raw: exercise,
    };
  };

  const fetchWorkoutApiExercises = async () => { // 1 call to populate raw-exercises.json
    if (!process.env.WORKOUT_API_BASE_URL || !process.env.WORKOUT_API_KEY)
        throw new Error("Missing workoutAPI variables at .env"); 
    
    const url = `${process.env.WORKOUT_API_BASE_URL}/exercises`;  
    const key = process.env.WORKOUT_API_KEY;

    try {
      const response = await axios.get(url, {headers: { "x-api-key": key }}); 

      const exercises = response.data

      return exercises; 

    } catch (err) {
        throw new Error (`Error fetching from API: ${err.message}, ${url}`); 
        // Clean error without axios noise
        
    }; 
  };

  module.exports = {
    fetchWorkoutApiExercises,
    normalizeWorkoutApiExercise,
    classifyExerciseMovementPattern,
  };