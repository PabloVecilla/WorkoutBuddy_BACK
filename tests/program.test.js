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
        password: "123456"
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
        }); 
    }); 
})