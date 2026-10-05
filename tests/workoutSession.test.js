const request = require("supertest"); 
const app = require("../src/app"); 
const { WorkoutSession, WorkoutExercise, WorkoutSet } = require("../src/models"); 

describe("WokroutSession", () => {
    let agent; 
    const validUserData = {
        name: "Carla",
        email: "carla@example.com",
        password: "TestUser1!"
    };
    const invalidUserData = {
        name: "Carlaaa",
        email: "carlaaa@example.com",
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

    describe("POST /programs/:programID/workouts/:workoutId/sessions", () => {
        it("starts a session for a workout in a program belonging to user", async () => {
            const agent = await registerAndLoginUser(); 
            const { programId, workoutId } = await createAndFindProgramAndWorkoutIdForUser(agent); 

            const response = await agent.post(`/programs/${programId}/workouts/${workoutId}/sessions`); 

            expect(response.status).toBe(200);

            const sessionId = response.body?.data?.id; 

            const session = await WorkoutSession.findOne({ where: { id: sessionId }, attributes: ["workoutId"] }); 

            const setsPerExerciseInDB = await WorkoutExercise.findAll({ where: { workoutId: session.workoutId }, attributes: ["sets", "order"], order: [["order", "ASC"]] }); 

            const totalExpectedSets = setsPerExerciseInDB.reduce(
                (sum, exercise) => sum + exercise.sets, 
                0
              );

            expect(response.body.data.workoutSets).toHaveLength(totalExpectedSets); 

        })

        it("resumes a session already started when reached multiple timesr", async () => {
            const agent = await registerAndLoginUser(); 
            const { programId, workoutId } = await createAndFindProgramAndWorkoutIdForUser(agent); 

            const response = await agent.post(`/programs/${programId}/workouts/${workoutId}/sessions`); 

            expect(response.status).toBe(200);

            const sessionStartingAt = response.body?.data?.startedAt

            const response2 = await agent.post(`/programs/${programId}/workouts/${workoutId}/sessions`); 

            expect(response2.status).toBe(200);

            expect(response2.body.data.startedAt).toBe(sessionStartingAt); 
        })
        it("rejects access to a session for a workout in a program belonging to other user", async () => {
            const agent = await registerAndLoginUser(); 
            const { programId, workoutId } = await createAndFindProgramAndWorkoutIdForUser(agent); 
    
            const response = await agent.post(`/programs/${programId}/workouts/${workoutId}/sessions`); 
    
            expect(response.status).toBe(200);
    
            const sessionId = response.body?.data?.id; 
    
            const session = await WorkoutSession.findOne({ where: { id: sessionId }, attributes: ["workoutId"] }); 
    
            await agent.post("/auth/logout"); 
    
            const intruder = await registerAndLoginUser(invalidUserData); 
            const intruderResponse = await intruder.post(`/programs/${programId}/workouts/${workoutId}/sessions`); 
    
            expect(intruderResponse.status).toBe(404);
        })
    })
    describe("PATCH /workout-sessions/:sessionId/finish", () => {
        it("finish session for owning user", async () => {
            const agent = await registerAndLoginUser(); 
            const { programId, workoutId } = await createAndFindProgramAndWorkoutIdForUser(agent); 

            const sessionResponse = await agent.post(`/programs/${programId}/workouts/${workoutId}/sessions`); 

            const sessionId = sessionResponse.body?.data?.id;

            const response = await agent.patch(`/workout-sessions/${sessionId}/finish`); 

            expect(response.status).toBe(200);

            expect(response.body.data.completedAt).not.toBeNull(); 
        }); 
    })
    
})