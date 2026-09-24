const request = require("supertest"); 
const app = require("../src/app"); 
const { WorkoutSession, WorkoutExercise, WorkoutSet } = require("../src/models"); 

describe("WokroutSet", () => {
    let agent; 
    const validUserData = {
        name: "Carla",
        email: "carla@example.com",
        password: "TestUser1!"
    };
    const programCreationData = {
        name: "Summer ready", 
        goal: "recomp", 
        level: "intermediate",
        frequency: 5
    };

    const registerAndLoginUser = async (userData = validUserData) => {
        const agent = request.agent(app);
    
        await agent.post("/auth/register").send(userData);
    
        const loginResponse = await agent.post("/auth/login").send({
            email: userData.email,
            password: userData.password
        });

        expect(loginResponse.status).toBe(200);
        expect(loginResponse.headers["set-cookie"]).toBeDefined();
    
        return agent;
    };
    const createAndFindProgramAndWorkoutIdForUser = async (agent) => {
        const programResponse = await agent.post("/programs/create").send(programCreationData);
        const programId = programResponse.body.data.id;
        const workoutResponse = await agent.get(`/programs/${programId}/workouts`); 
        const workoutId = workoutResponse.body.data[0]?.id; 
        return { programId, workoutId }; 
    }

    describe("PATCH /workout-sessions/:sessionId/set/:setId", () => {
        it("patches set data for a session belonging to user", async () => {
            const agent = await registerAndLoginUser(); 
            const { programId, workoutId } = await createAndFindProgramAndWorkoutIdForUser(agent); 

            const response = await agent.post(`/programs/${programId}/workouts/${workoutId}/sessions`); 

            expect(response.status).toBe(200);

            const sessionId = response.body?.data?.id; 
            const setId = response.body?.data?.workoutSets[1]?.id

            const updatedSet = await agent.patch(`/workout-sessions/${sessionId}/sets/${setId}`).send({ executedReps: 10, weightKg: 10, isCompleted: true }); 

            expect(updatedSet.status).toBe(200); 
            expect(updatedSet.body.data.id).toBe(setId); 
            expect(updatedSet.body.data.executedReps).toBe(10); 
            expect(updatedSet.body.data.weightKg).toBe(10);
            expect(updatedSet.body.data.isCompleted).toBe(true);  
        })
    })
    describe("PATCH /workout-sessions/:sessionId/set/:setId", () => {
        it("pweightKg of 0 is valid", async () => {
            const agent = await registerAndLoginUser(); 
            const { programId, workoutId } = await createAndFindProgramAndWorkoutIdForUser(agent); 

            const response = await agent.post(`/programs/${programId}/workouts/${workoutId}/sessions`); 

            expect(response.status).toBe(200);

            const sessionId = response.body?.data?.id; 
            const setId = response.body?.data?.workoutSets[1]?.id

            const updatedSet = await agent.patch(`/workout-sessions/${sessionId}/sets/${setId}`).send({ executedReps: 10, weightKg: 0, isCompleted: true }); 

            expect(updatedSet.status).toBe(200); 
            expect(updatedSet.body.data.id).toBe(setId); 
            expect(updatedSet.body.data.executedReps).toBe(10); 
            expect(updatedSet.body.data.weightKg).toBe(0);
            expect(updatedSet.body.data.isCompleted).toBe(true);  
        })
    })

    describe("PATCH /workout-sessions/:sessionId/set/:setId", () => {
        it("invalid numbers return 400", async () => {
            const agent = await registerAndLoginUser(); 
            const { programId, workoutId } = await createAndFindProgramAndWorkoutIdForUser(agent); 

            const response = await agent.post(`/programs/${programId}/workouts/${workoutId}/sessions`); 

            expect(response.status).toBe(200);

            const sessionId = response.body?.data?.id; 
            const setId = response.body?.data?.workoutSets[1]?.id

            const updatedSet = await agent.patch(`/workout-sessions/${sessionId}/sets/${setId}`).send({ executedReps: true, weightKg: -12, isCompleted: 100 }); 

            expect(updatedSet.status).toBe(400); 
        })
        it("finished session don't allow further set updates", async () => {
            const agent = await registerAndLoginUser(); 
            const { programId, workoutId } = await createAndFindProgramAndWorkoutIdForUser(agent); 

            const sessionResponse = await agent.post(`/programs/${programId}/workouts/${workoutId}/sessions`); 

            const sessionId = sessionResponse.body?.data?.id;

            await agent.patch(`/workout-sessions/${sessionId}/finish`); 

            const sets = await WorkoutSet.findAll({ where: { workoutSessionId: sessionId } }); 

            const response = await agent.patch(`/workout-sessions/${sessionId}/sets/${sets[0].id}`).send({ executedReps: 10, weightKg: 12, isCompleted: true }); 

            expect(response.status).toBe(409); 
            
        }); 
    })
})