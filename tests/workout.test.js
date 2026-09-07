const request = require("supertest"); 
const app = require("../src/app"); 
const { Program, Workout } = require("../src/models"); 

describe("Workout", () => {
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

    describe("GET /programs/:programId/workouts", () => {
        it("returns workouts in existing program for authenticated user", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse.body.data.id;

            const response = await agent.get(`/programs/${programId}/workouts`); 

            expect(response.status).toBe(200); 
            expect(response.body.message).toBe("Workouts found"); 
            expect(response.body.data).toBeDefined(); 
            expect(response.body.data).toHaveLength(programCreationData.frequency); 

            expect(
                response.body.data.every(
                  workout => workout.programId === programId
                )
              ).toBe(true); // .every returns a boolean, checks a yes/no fact

            const program = await Program.findByPk(programId); 
            const programOwner = program.userId; 

            expect(programOwner).toBe(user.body.data.id); 
        })

        it("rejects access to unauthenticated user", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse.body.data.id;

            await agent.post("/auth/logout"); 

            const response = await agent.get(`/programs/${programId}/workouts`); 

            expect(response.status).toBe(401); 
            expect(response.body.error.message).toBe("Unauthorized"); 
            expect(response.body.data).toBeUndefined(); 

        })

        it("rejects access to another user's workouts", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse.body.data.id;

            await agent.post("/auth/logout"); 
            await agent.post("/auth/register").send({ name: "Carlos",
                                                    email: "carlos@example.com",
                                                    password: "TestUser1!" }); 
            await agent.post("/auth/login").send({ email: "carlos@example.com",
                                                    password: "TestUser1!" }); 

            const response = await agent.get(`/programs/${programId}/workouts`); 

            expect(response.status).toBe(404); 
            expect(response.body.error.message).toBe("Workout not found"); 
            expect(response.body.data).toBeUndefined(); 

        })

    })
    describe("GET /programs/:programId/workouts/:workoutId", () => {
        it("returns workout by id in existing program for authenticated user", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse.body.data.id;

            const workoutsResponse = await agent.get(`/programs/${programId}/workouts`); 
            const workouts = workoutsResponse.body.data; 

            await Promise.all(workouts.map(async (workout) => {
                const response = await agent.get(`/programs/${programId}/workouts/${workout.id}`); 
                expect(response.status).toBe(200); 
                expect(response.body.message).toBe("Workout found"); 
                expect(response.body.data.programId).toBe(programId); 
                expect(response.body.data.dayNumber).toBe(workout.dayNumber); 
            }))
        })

        it("rejects access to another user's workouts", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse.body.data.id;
            const workoutsResponse = await agent.get(`/programs/${programId}/workouts`); 
            const workouts = workoutsResponse.body.data; 

            await agent.post("/auth/logout"); 
            await agent.post("/auth/register").send({ name: "Carlos",
                                                    email: "carlos@example.com",
                                                    password: "TestUser1!" }); 
            await agent.post("/auth/login").send({ email: "carlos@example.com",
                                                    password: "TestUser1!" }); 

            await Promise.all(workouts.map(async (workout) => {
                const response = await agent.get(`/programs/${programId}/workouts/${workout.id}`); 
                expect(response.status).toBe(404); 
                expect(response.body.error.message).toBe("Workout not found"); 
                expect(response.body.data).toBeUndefined(); 
            }))
        })

        it("rejects access to another user's workouts on valid Program", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse1 = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse1.body.data.id;
            const workoutsResponse = await agent.get(`/programs/${programId}/workouts`); 
            const workouts = workoutsResponse.body.data; 

            await agent.post("/auth/logout"); 
            await agent.post("/auth/register").send({ name: "Carlos",
                                                    email: "carlos@example.com",
                                                    password: "TestUser1!" }); 
            await agent.post("/auth/login").send({ email: "carlos@example.com",
                                                    password: "TestUser1!" }); 

            const programResponse2 = await agent.post("/programs/create").send(programCreationData); 
            const programId2 = programResponse2.body.data.id;

            await Promise.all(workouts.map(async (workout) => {
                const response = await agent.get(`/programs/${programId2}/workouts/${workout.id}`); 
                expect(response.status).toBe(404); 
                expect(response.body.error.message).toBe("Workout not found"); 
                expect(response.body.data).toBeUndefined(); 
            }))
        })  
    })
    describe("PATCH /programs/:programId/workouts/:workoutId", () => {
        it("changes dayNumber of workout for program owned by user", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse.body.data.id;

            const workoutsResponse = await agent.get(`/programs/${programId}/workouts`); 
            const workouts = workoutsResponse.body.data; 

            const dayOne = workouts.find(
                workout => workout.dayNumber === 1
              );
              
              const dayTwo = workouts.find(
                workout => workout.dayNumber === 2
              );
              
              const response = await agent
                .patch(`/programs/${programId}/workouts/${dayOne.id}`)
                .send({ dayNumber: 2 });
              
              expect(response.status).toBe(200);
              expect(response.body.data.dayNumber).toBe(2);

              const updatedDay1 = await Workout.findByPk(dayOne.id); 
              const updatedDay2 = await Workout.findByPk(dayTwo.id);
              
              expect(updatedDay1.dayNumber).toBe(2); 
              expect(updatedDay2.dayNumber).toBe(1); 
        })

        it.each([
            [0, "zero"],
            [2.5, "decimal"],
            ["3", "string"]
          ])("rejects %s as an invalid dayNumber", async (invalidDayNumber) => {
            const agent = request.agent(app);
            await agent.post("/auth/register").send(validUserData); 
            await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse.body.data.id;

            const workoutsResponse = await agent.get(`/programs/${programId}/workouts`); 
            const workouts = workoutsResponse.body.data; 

            const dayOne = workouts.find(
                workout => workout.dayNumber === 1
              );
            const response = await agent
              .patch(`/programs/${programId}/workouts/${dayOne.id}`)
              .send({ dayNumber: invalidDayNumber });
          
            expect(response.status).toBe(400);

            const dayOneDb = await Workout.findByPk(dayOne.id); 
            const dayOneDayNumber = dayOneDb.dayNumber; 

            expect(dayOneDayNumber).toBe(dayOne.dayNumber); 
          });

        it("rejects dayNumber when it's bigger than program's frequency", async () => {
            const agent = request.agent(app);
            await agent.post("/auth/register").send(validUserData); 
            await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse.body.data.id;

            const programFrequency = programResponse.body.data.frequency; 

            const workoutsResponse = await agent.get(`/programs/${programId}/workouts`); 
            const workouts = workoutsResponse.body.data; 

            const dayOne = workouts.find(
                workout => workout.dayNumber === 1
              );
            const response = await agent
              .patch(`/programs/${programId}/workouts/${dayOne.id}`)
              .send({ dayNumber: programFrequency + 1 });

            expect(response.status).toBe(400); 

            const dayOneDb = await Workout.findByPk(dayOne.id); 
            const dayOneDayNumber = dayOneDb.dayNumber; 

            expect(dayOneDayNumber).toBe(dayOne.dayNumber); 

        })

        it ("returns 200 and DB remains unchanged when dayNumber === previous", async () => {
            const agent = request.agent(app);
            await agent.post("/auth/register").send(validUserData); 
            await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse.body.data.id;

            const workoutsResponse = await agent.get(`/programs/${programId}/workouts`); 
            const workouts = workoutsResponse.body.data; 

            const dayOne = workouts.find(
                workout => workout.dayNumber === 1
              );
            const response = await agent
              .patch(`/programs/${programId}/workouts/${dayOne.id}`)
              .send({ dayNumber: dayOne.dayNumber });

            expect(response.status).toBe(200); 

            const dayOneDb = await Workout.findByPk(dayOne.id); 
            const dayOneDayNumber = dayOneDb.dayNumber; 
            
            expect(dayOneDayNumber).toBe(dayOne.dayNumber); 
        })

        it("rejects changes to a workout not owned", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse.body.data.id;
            const workoutsResponse = await agent.get(`/programs/${programId}/workouts`); 
            const workouts = workoutsResponse.body.data; 

            await agent.post("/auth/logout"); 
            await agent.post("/auth/register").send({ name: "Carlos",
                                                    email: "carlos@example.com",
                                                    password: "TestUser1!" }); 
            await agent.post("/auth/login").send({ email: "carlos@example.com",
                                                    password: "TestUser1!" }); 

            await Promise.all(workouts.map(async (workout) => {
                const response = await agent.patch(`/programs/${programId}/workouts/${workout.id}`).send({ dayNumber: 2 }); 

                expect(response.status).toBe(404); 
                expect(response.body.error.message).toBe("Workout not found"); 
                expect(response.body.workout).toBeUndefined(); 
            }))
        })

        it("rejects changes to a workout not owned through a user's program", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse1 = await agent.post("/programs/create").send(programCreationData);
            const programId = programResponse1.body.data.id;
            const workoutsResponse = await agent.get(`/programs/${programId}/workouts`); 
            const workouts = workoutsResponse.body.data; 

            await agent.post("/auth/logout"); 
            await agent.post("/auth/register").send({ name: "Carlos",
                                                    email: "carlos@example.com",
                                                    password: "TestUser1!" }); 
            await agent.post("/auth/login").send({ email: "carlos@example.com",
                                                    password: "TestUser1!" }); 

            const programResponse2 = await agent.post("/programs/create").send(programCreationData); 
            const programId2 = programResponse2.body.data.id;

            await Promise.all(workouts.map(async (workout) => {
                const response = await agent.patch(`/programs/${programId2}/workouts/${workout.id}`).send({ dayNumber: 2 }); 

                expect(response.status).toBe(404); 
                expect(response.body.error.message).toBe("Workout not found"); 
                expect(response.body.workout).toBeUndefined(); 
            }))
        })

    })
})