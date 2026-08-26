const request = require("supertest"); 
const app = require("../src/app"); 
const { Program } = require("../src/models"); 

describe ("Program", () => {
    describe("POST/ programs/create", () => {
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
        it("authenticated user creates a program", async () => {
            const agent = request.agent(app); // keeps active session cookies from register and login

            await agent.post("/auth/register").send(validUserData); 
            const user = (await agent.post("/auth/login")).send({ email: validUserData.email, password: validUserData.password }); 

            const response = await agent.post("/programs/create").send(programCreationData); 

            expect(response.status).toBe(201); 
            expect(response.body.message).toBe("Program created successfully"); 
            expect(response.body.program.userId).toBe(user.body.user.id); 

            const programCreated = await Program.findOne({ where: { name: programCreationData.name, goal: programCreationData.goal, level: programCreationData.level, frequency: programCreationData.frequency } }); 

            expect(programCreated).not.toBeNull(); // findOne returns null when 404
            expect(programCreated.userId).toBe(user.body.user.id); 

        }); 
    }); 
    describe("GET /programs")
})