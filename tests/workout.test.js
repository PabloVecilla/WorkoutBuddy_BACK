const request = require("supertest"); 
const app = require("../src/app"); 
const { Program, Workout } = require("../src/models"); 

describe("Workout", () => {
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
    describe("GET /programs/:programId/workouts", () => {
        it("returns workouts in existing program for authenticated user", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse.body.program.id;

            const response = await agent.get(`/programs/${programId}/workouts`); 

            expect(response.status).toBe(200); 
            expect(response.body.message).toBe("Workouts found"); 
            expect(response.body.workouts).toBeDefined(); 
            expect(response.body.workouts.length).toBe(programCreationData.frequency); 

            expect(
                response.body.workouts.every(
                  workout => workout.programId === programId
                )
              ).toBe(true); // .every returns a boolean, checks a yes/no fact

            const program = await Program.findByPk(programId); 
            const programOwner = program.userId; 

            expect(programOwner).toBe(user.body.user.id); 
        })

        it("rejects access to another user's workouts", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse.body.program.id;

            await agent.post("/auth/logout"); 
            await agent.post("/auth/register").send({ name: "Carlos",
                                                    email: "carlos@example.com",
                                                    password: "123456" }); 
            await agent.post("/auth/login").send({ email: "carlos@example.com",
                                                    password: "123456" }); 

            const response = await agent.get(`/programs/${programId}/workouts`); 

            expect(response.status).toBe(404); 
            expect(response.body.message).toBe("No workouts found"); 
            expect(response.body.programId).toBeUndefined(); 

        })

    })
    describe("GET /programs/:programId/workouts/:workoutId", () => {
        it("returns workout by id in existing program for authenticated user", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse.body.program.id;

            const workoutsResponse = await agent.get(`/programs/${programId}/workouts`); 
            const workouts = workoutsResponse.body.workouts; 

            await Promise.all(workouts.map(async (workout) => {
                const response = await agent.get(`/programs/${programId}/workouts/${workout.id}`); 
                expect(response.status).toBe(200); 
                expect(response.body.message).toBe("Workout found"); 
                expect(response.body.workout.programId).toBe(programId); 
                expect(response.body.workout.dayNumber).toBe(workout.dayNumber); 
            }))
        })

        it("rejects access to another user's workouts", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse1 = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse1.body.program.id;
            const workoutsResponse = await agent.get(`/programs/${programId}/workouts`); 
            const workouts = workoutsResponse.body.workouts; 

            await agent.post("/auth/logout"); 
            await agent.post("/auth/register").send({ name: "Carlos",
                                                    email: "carlos@example.com",
                                                    password: "123456" }); 
            await agent.post("/auth/login").send({ email: "carlos@example.com",
                                                    password: "123456" }); 

            const programResponse2 = await agent.post("/programs/create").send(programCreationData); 
            const programId2 = programResponse2.body.program.id;

            await Promise.all(workouts.map(async (workout) => {
                const response = await agent.get(`/programs/${programId2}/workouts/${workout.id}`); 
                expect(response.status).toBe(404); 
                expect(response.body.message).toBe("Workout not found"); 
                expect(response.body.workout).toBeUndefined(); 
            }))
        })  
    })
    describe("PATCH /programs/:programId/workouts/workoutId", () => {
        it("changes dayNumber of workout for program owned by user", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse.body.program.id;

            const workoutsResponse = await agent.get(`/programs/${programId}/workouts`); 
            const workouts = workoutsResponse.body.workouts; 

            await Promise.all(workouts.map(async (workout) => {
                const response = await agent.patch(`/programs/${programId}/workouts/${workout.id}`).send({ dayNumber: 2 }); 
                expect(response.status).toBe(200); 
                expect(response.body.message).toBe("Workout order updated successfully"); 
                expect(response.body.workout.programId).toBe(programId); 
                expect(response.body.workout.dayNumber).toBe(2); 
            }))
        })

        it("rejects changes to a workout not owned", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse1 = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse1.body.program.id;
            const workoutsResponse = await agent.get(`/programs/${programId}/workouts`); 
            const workouts = workoutsResponse.body.workouts; 

            await agent.post("/auth/logout"); 
            await agent.post("/auth/register").send({ name: "Carlos",
                                                    email: "carlos@example.com",
                                                    password: "123456" }); 
            await agent.post("/auth/login").send({ email: "carlos@example.com",
                                                    password: "123456" }); 

            const programResponse2 = await agent.post("/programs/create").send(programCreationData); 
            const programId2 = programResponse2.body.program.id;

            await Promise.all(workouts.map(async (workout) => {
                const response = await agent.patch(`/programs/${programId2}/workouts/${workout.id}`); 
                expect(response.status).toBe(404); 
                expect(response.body.message).toBe("Workout not found in this Program"); 
                expect(response.body.workout).toBeUndefined(); 
            }))
        })
        
    })
})