const request = require("supertest"); 
const app = require("../src/app"); 
const { Program } = require("../src/models"); 

describe ("Program", () => {
    const programCreationData = {
        name: "Summer ready", 
        goal: "recomp", 
        level: "intermediate",
        frequency: 5
    }; 
    const validUserData = {
        name: "Carla",
        email: "carla@example.com",
        password: "TestUser1!"
    }; 
    describe("POST/ programs/create", () => {

        it("authenticated user creates a program", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const response = await agent.post("/programs/create").send(programCreationData); 

            expect(response.status).toBe(201); 
            expect(response.body.message).toBe("Program created successfully"); 
            expect(response.body.data.userId).toBe(user.body.data.id); 

            const programCreated = await Program.findOne({ where: { name: programCreationData.name, goal: programCreationData.goal, level: programCreationData.level, frequency: programCreationData.frequency } }); 

            expect(programCreated).not.toBeNull(); // findOne returns null when 404
            expect(programCreated.userId).toBe(user.body.data.id); 

        }); 
    }); 
    describe("GET /programs", () => {
        it("returns programs for user", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            await agent.post("/programs/create").send(programCreationData); 

            const response = await agent.get("/programs"); 

            expect(response.status).toBe(200); 
            expect(response.body.data[0].userId).toBe(user.body.data.id); 
            expect(response.body).toEqual({
                success: true,
                data: response.body.data,
                message: "Programs found successfully",
                meta: {}
            })
        }); 

        it("returns 200 with empty array when user has no programs yet", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const response = await agent.get("/programs"); 

            expect(response.status).toBe(200); 
            expect(response.body).toEqual({
                success: true,
                data: [],
                message: "You have no programs yet",
                meta: {}
            })
        })
    }); 
    describe("GET /programs/:id", () => {
        it("returns program by valid id to authenticated user", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData); 

            const response = await agent.get(`/programs/${programResponse.body.data.id}`); 

            expect(response.status).toBe(200); 
            expect(response.body.data.id).toBe(programResponse.body.data.id)
            expect(response.body.data.Workouts).toBeDefined(); 
            expect(response.body.data.Workouts[0].workoutExercises).toBeDefined(); 
            expect(response.body.data.Workouts[0].workoutExercises[0].exercise).toBeDefined(); 
            expect(response.body).toEqual({
                success: true,
                data: response.body.data,
                message: "Program found",
                meta: {}
            })
        })
        it("rejects another user's program by valid id to authenticated user", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData); 

            await agent.post("/auth/logout"); 

            const intruderData = { name: "Intruder", email: "intruder@mail.com", password: "tesstIntruder1!" }

            await agent.post("/auth/register").send(intruderData); 

            await agent.post("/auth/login").send({ email: intruderData.email, password: intruderData.password });

            const response = await agent.get(`/programs/${programResponse.body.data.id}`); 

            expect(response.status).toBe(404);
            expect(response.body).toEqual({
                success: false,
                error: {
                    code: "PROGRAM_NOT_FOUND",
                    message: "Program not found",
                }
            }); 
        })
    })
    describe("PATCH /programs/:id", () => {
        it("returns updated program for user", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData); 

            const response = await agent.patch(`/programs/${programResponse.body.data.id}`).send({ name: "Super program" }); 

            expect(response.status).toBe(200); 
            expect(response.body).toEqual({
                success: true,
                data: response.body.data,
                message: "Program name edited successfully",
                meta: {}
            }); 
        }); 
        it("rejects empty name field to update program", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData); 

            const response = await agent.patch(`/programs/${programResponse.body.data.id}`).send({ name: "" });
            
            expect(response.status).toBe(400); 
            expect(response.body.error.message).toBe("Invalid name"); 
        })
    })
    describe("DELETE /programs/:id", () => {
        it("deletes authorized program for user", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData); 

            const response = await agent.delete(`/programs/${programResponse.body.data.id}`); 

            expect(response.status).toBe(200); 
            expect(response.body).toEqual({
                success: true,
                data: { deletedCount: 1 },
                message: "Program deleted successfully",
                meta: {}
            }); 
        })
        it("rejects deletion for unauthorized user", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = await agent.post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            const programResponse = await agent.post("/programs/create").send(programCreationData); 

            await agent.post("/auth/logout"); 

            const intruderData = { name: "Intruder", email: "intruder@mail.com", password: "tesstIntruder1!" }

            await agent.post("/auth/register").send(intruderData); 

            await agent.post("/auth/login").send({ email: intruderData.email, password: intruderData.password });

            const response = await agent.delete(`/programs/${programResponse.body.data.id}`); 

            expect(response.status).toBe(404); 
            expect(response.body.error.message).toBe("Program not found"); 
        })
    })
})