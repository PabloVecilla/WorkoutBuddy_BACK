const request = require("supertest"); 
const app = require("../src/app"); 
const loginLimiter = require("../src/middleware/rateLimit.middleware"); 
const { WorkoutExercise, Exercise } = require("../src/models"); 

describe("WokroutExercise", () => {
    let agent; 
    const validUserData = {
        name: "Carla",
        email: "carla@example.com",
        password: "123456"
    };
    const programCreationData = {
        name: "Summer ready", 
        goal: "recomp", 
        level: "intermediate",
        frequency: 5
    };
    beforeEach(() => {
        if (loginLimiter && typeof loginLimiter.resetKey === 'function') {
            loginLimiter.resetKey('::1');
            loginLimiter.resetKey('127.0.0.1');
            loginLimiter.resetKey('::ffff:127.0.0.1');
        }
    });

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

    describe("GET /programs/:programId/workouts/:workoutId/workout-exercises", () => {
        it("returns workout-exercises in a workout of a program belonging to user", async () => {
            const agent = await registerAndLoginUser(); 
            const { programId, workoutId } = await createAndFindProgramAndWorkoutIdForUser(agent); 

            const response = await agent.get(`/programs/${programId}/workouts/${workoutId}/workout-exercises`); 

            expect(response.status).toBe(200);

            const workoutExercises = await WorkoutExercise.findAll({ where: { workoutId }}); 
            const firstWorkoutExercise = workoutExercises[0]; 

            expect(response.body.data[0]).toEqual( // toBe() for exact values  toEqual() for objects
                expect.objectContaining({
                  id: firstWorkoutExercise.id
                })
              );

        })
        it("rejects unauthorized requests", async () => {
            const agent = await registerAndLoginUser(); 
            const { programId, workoutId } = await createAndFindProgramAndWorkoutIdForUser(agent); 
            await agent.post("/auth/logout"); 
            const response = await request(app).get(`/programs/${programId}/workouts/${workoutId}/workout-exercises`); 

            expect(response.status).toBe(401); 
            expect(response.body.error.message).toBe("Unauthorized"); 
            expect(response.body.workoutExercises).toBeUndefined(); 
        })
        it("returns 404 when user tries to get workout-exercises from invalid workout", async () => {
            const agent = await registerAndLoginUser();
            const { programId } =
                await createAndFindProgramAndWorkoutIdForUser(agent);
        
            const invalidWorkoutId = 999999;
        
            const response = await agent.get(
                `/programs/${programId}/workouts/${invalidWorkoutId}/workout-exercises`
            );
        
            expect(response.status).toBe(404);
        });

    })

    describe("PATCH /programs/:programId/workouts/:workoutId/workout-exercises/:id", () => {
        it("PATCHEs workout-exercise in a valid program, in a valid workout with a valid id for user", async () => {
            const agent = await registerAndLoginUser(); 
            const { programId, workoutId } = await createAndFindProgramAndWorkoutIdForUser(agent); 

            const workoutExercise = await WorkoutExercise.findOne({where: { workoutId }, order: [["order", "ASC"]]}); 
            const workoutExerciseId = workoutExercise.id; 

            const response = await agent.patch(`/programs/${programId}/workouts/${workoutId}/workout-exercises/${workoutExerciseId}`).send({ exerciseId: 1, sets: 1, reps: 1, restSeconds: 10, order: 2 }); 

            expect(response.status).toBe(200); 

            const workoutExerciseEdited = await WorkoutExercise.findByPk(workoutExerciseId); 
            expect(workoutExerciseEdited.exerciseId).toBe(1); 
        })
        it("returns 404 when user tries to update invalid workoutExercise", async () => {
            const agent = await registerAndLoginUser();
            const { programId, workoutId } =
                await createAndFindProgramAndWorkoutIdForUser(agent);
        
            const invalidWorkoutExerciseId = 999999;
        
            const response = await agent
                .patch(
                    `/programs/${programId}/workouts/${workoutId}/workout-exercises/${invalidWorkoutExerciseId}`
                )
                .send({
                    exerciseId: 1,
                    sets: 1,
                    reps: 1,
                    restSeconds: 10,
                    order: 2
                });
        
            expect(response.status).toBe(404);
            expect(response.body.error.message).toBe("Exercise not found");
        });

        it("returns 404 when user tries to update unauthorized workoutExercise", async () => {
            const agent = await registerAndLoginUser();
        
            const { programId, workoutId } =
                await createAndFindProgramAndWorkoutIdForUser(agent);
        
            const secondUserData = {
                name: "Pedro",
                email: "pedro@example.com",
                password: "123456"
            };
        
            const secondAgent = await registerAndLoginUser(secondUserData);
        
            const {
                workoutId: secondWorkoutId
            } = await createAndFindProgramAndWorkoutIdForUser(secondAgent);
        
            const secondUserWorkoutExercise = await WorkoutExercise.findOne({
                where: { workoutId: secondWorkoutId },
                order: [["order", "ASC"]]
            });
        
            const response = await agent
                .patch(
                    `/programs/${programId}/workouts/${workoutId}/workout-exercises/${secondUserWorkoutExercise.id}`
                )
                .send({
                    exerciseId: 1,
                    sets: 1,
                    reps: 1,
                    restSeconds: 10,
                    order: 2
                });
        
            expect(response.status).toBe(404);
            expect(response.body.error.message).toBe("Exercise not found");
        });
    })
})