const axios = require("axios"); 
require("dotenv").config(); 

// Prepare cache variables
let cachedExercises = null; 
let cacheTimestamp = null; 

const CACHE_DURATION = 1000 * 60 * 60 * 24; 

const classifyExerciseCategory = (exercise) => {
    const name = exercise.name?.toLowerCase() || "";
    const muscle = exercise.primaryMuscles?.[0]?.name?.toLowerCase() || "";
  
    if (name.includes("lateral raise") || name.includes("upright row")) return "side_delt";
    if (name.includes("rear delt") || name.includes("reverse fly") || name.includes("face pull") || name.includes("reverse butterfly")) return "rear_delt";
    if (name.includes("shoulder press") || name.includes("overhead press")) return "vertical_press";
    if (name.includes("pull up") || name.includes("pull down") || name.includes("pullover")) return "vertical_pull";
    if (name.includes("row")) return "horizontal_pull";
  
    if (muscle.includes("chest")) return "horizontal_press";
    if (muscle.includes("biceps")) return "biceps";
    if (muscle.includes("triceps")) return "triceps";
    if (muscle.includes("quadriceps") || muscle.includes("quads")) return "squat_pattern";
    if (muscle.includes("hamstring")) return "hamstring_curl";
    if (muscle.includes("glute")) return "glutes";
    if (muscle.includes("calves")) return "calves";
    if (muscle.includes("abs") || muscle.includes("core")) return "core";
  
    return "general";
  };
  
  const normalizeWorkoutApiExercise = (exercise) => {
    const url = `${process.env.WORKOUT_API_BASE_URL}/exercises`; 
    const imageUrl = `${url}/${exercise.id}/image`; 

    return {
      externalId: String(exercise.id),
      source: "workoutapi",
      name: exercise.name,
      muscle: exercise.primaryMuscles?.[0]?.name ?? null,
      category: classifyExerciseCategory(exercise),
      equipment: exercise.categories?.[0]?.name ?? null,
      imageUrl,
      instructions: exercise.description ?? null,
      raw: exercise,
    };
  };

  const getExercises = async () => {
    const now = Date.now(); 

    if (cachedExercises && cacheTimestamp && now - cacheTimestamp < CACHE_DURATION) return cachedExercises; 

    const url = `${process.env.WORKOUT_API_BASE_URL}/exercises`;  
    const key = process.env.SECONDARY_WORKOUT_API_KEY;

    const response = axios.get(url, {headers: { "x-api-key": key }}); 

    cachedExercises = response.data?.map(normalizeWorkoutApiExercise); 
    cacheTimestamp = now; 

    return cachedExercises; 
  }; 

const fetchWorkoutApiExerciseById = async (id) => {
    if (!process.env.WORKOUT_API_BASE_URL || !process.env.SECONDARY_WORKOUT_API_KEY)
        throw new Error("Missing environment variables"); 

    try {
        const response = await axios.get(`${process.env.WORKOUT_API_BASE_URL}/exercises/${id}`, { headers: { 
            "x-api-key": process.env.SECONDARY_WORKOUT_API_KEY }
        }); 

        return normalizeWorkoutApiExercise(response.data); 

    } catch (err) {
        throw new Error (`Error fetching from API: ${err.message}, ${process.env.WORKOUT_API_BASE_URL}`); 
    }
}; 
  
  const fetchWorkoutApiExercises = async (filters = {}) => {
// If no filters get passed, loop never runs because there's nothing to iterate
    if (!process.env.WORKOUT_API_BASE_URL || !process.env.SECONDARY_WORKOUT_API_KEY)
        throw new Error("Missing environment variables"); 

    try {

        let exercises = await getExercises(); 

            for (let filterKey in filters) { 
                const filterValue = filters[filterKey];
                if (!filterValue) continue; // skip iteration if there's no filterValue; 

                exercises = exercises.filter((exercise) => {
                    // exercise[filterKey].toLowerCase could crash if it's value is null. Check for value first.
                    const exerciseValue = exercise[filterKey]; 
                    if (!exerciseValue) return false; 

                    if (filterKey === "name" || filterKey === "muscle") {
                        return exerciseValue.toLowerCase().includes(filterValue.toLowerCase()) ; 
                    }
                    return exerciseValue.toLowerCase() === filterValue.toLowerCase(); 
                }); 
            }
            return exercises; 

    } catch (err) {
        throw new Error (`Error fetching from API: ${err.message}, ${url}`); 
        // Clean error without axios noise
        
    }; 
  };
  
  module.exports = {
    fetchWorkoutApiExercises,
    fetchWorkoutApiExerciseById,
    getExercises,
    normalizeWorkoutApiExercise,
    classifyExerciseCategory,
  };