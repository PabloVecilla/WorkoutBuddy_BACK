// Import models
const { Program } = require("../models"); 
// Import programBuilder
const { generateProgram } = require("./programBuilder"); 
// import workout inyection function
const { createWorkoutsForProgram } = require("./workout.service"); 

const { createWorkoutForUser } = require("./workout.service"); 
const { createWorkoutExercises } = require("./workoutExercise.service"); 

const findAllProgramsForUser = async (userId) =>
    Program.findAll( { where: { userId } }); 

const findProgramByIdForUser = async (data) => 
    Program.findOne({ where: { id: data.id, 
                                userId: data.userId }, 
                                include: [{ // left join the Workouts that BELONG to said user and said program
                                    model: Workout, 
                                    required: false,
                                    include: [{ // left join the Exercises that belong to said WOrkout from said Program of said User
                                        model: Exercise,
                                        required: false
                                    }],
                                }], 
                                order: [
                                    [Workout, "dayNumber", "ASC"],
                                    [Workout, Exercise, "order", "ASC"]
                                ] 
                    }); 

const destroyProgramForUser = async (data) =>
    Program.destroy({ where: { id: data.programId, userId: data.userId } })

const generateAndSaveProgramForUser = async (data) => {
    const { name, goal, level, frequency, userId } = data;

    try {
        const result = await sequelize.transaction(async (t) => { 
            const generatedProgram = await generateProgram({ name, goal, level, frequency }); 
            if (!generatedProgram) throw new Error("BAD_REQUEST: Unable to generate program with given input"); 

            const addedProgram = await Program.create({
                name: generatedProgram.name, 
                goal: generatedProgram.goal, 
                level: generatedProgram.level, 
                frequency: generatedProgram.frequency, 
                userId 
            }, { transaction: t } ); 

            await createWorkoutsForProgram(generatedProgram.workouts, addedProgram.id, t );  // t passes over to workout service
            return addedProgram; 

        }); 
        return result; 

    } catch (err) {
        console.error("[ProgramService Error]:", err.message); 

        throw err; // re-throw error for program.controller to catch. 
    }
    
}; 

const updateProgramForUser = async (input) => {

    const { programId, userId } = input; 
    const { name, goal, level, frequency } = input.data; 

    const program = await Program.findOne( { where: {id: programId, userId } }); 
    if (!program) return null;  

    return await program.update({
        name: name ?? program.name, 
        goal: goal ?? program.goal, 
        level: level ?? program.level, 
        frequency: frequency ?? program.frequency
    }); 
}; 

module.exports = { updateProgramForUser, findAllProgramsForUser, findProgramByIdForUser, destroyProgramForUser, generateAndSaveProgramForUser }; 
