const { patchWorkoutSet } = require ("../services/workoutSet.service"); 
const AppError = require("../utils/AppError");

const updateWorkoutSet = async (req, res) => {
    const userId = req.user.id;
    const sessionId = Number(req.params.sessionId);
    const setId = Number(req.params.setId);
    const { executedReps, weightKg, isCompleted } = req.body; 

    if (isNaN(sessionId) || isNaN(setId)) throw new AppError(400, "INVALID_ID", "Invalid session or set id"); 

    const updatedWorkoutSet = await patchWorkoutSet(userId, sessionId, setId, { executedReps, weightKg, isCompleted });

    if ( updatedWorkoutSet === null) throw new AppError(404, "SET_UPDATE_ERROR", "Error updating session's set"); 

    res.status(200).json({
        success: true,
        data: updatedWorkoutSet,
        message: "Workout Set updated successfully",
        meta: {}
    });
};

module.exports = { updateWorkoutSet }; 