const request = require("supertest"); 
const app = require("../src/app"); 
const { User } = require("../src/models"); 

describe ("Authentication", () => {
    const validUserData = {
        name: "Carla",
        email: "carla@example.com",
        password: "123456"
      }
    describe("POST /auth/register", () => {
        it("registers a new user", async () => {
            const response = await request(app).post("/auth/register").send(validUserData); 

            expect(response.status).toBe(201); 
            expect(response.body.user.name).toBe("Carla"); 
            expect(response.body.user.email).toBe("carla@example.com"); 

            expect(response.body.user.passwordHash).toBeUndefined();
            expect(response.body.user.password).toBeUndefined();
          
            const createdUser = await User.findOne({
              where: { email: "carla@example.com" }
            });
          
            expect(createdUser).not.toBeNull();
            expect(createdUser.name).toBe("Carla");
        }); 

        it("rejects existing user", async () => {
            await request(app).post("/auth/register").send(validUserData); 
            const response = await request(app).post("/auth/register").send(validUserData); 
            expect(response.status).toBe(409); 
            expect(response.body.message).toBe("User already registered"); 

            expect(response.body.user).toBeUndefined(); 

            const users = await User.findAll({ where: { email: "carla@example.com" } }); 
            expect(users.length).toBe(1); 

        }); 
        
        it.todo("rejects invalid input"); 
    }); 

    describe("POST /auth/login", () => {
        it("logs in a user with valid credentials", async () => {
            const existingUser = await request(app).post("/auth/register").send(validUserData); 
            const loginUser = await request(app).post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            expect(loginUser).toBeDefined(); 

            expect(loginUser.status).toBe(200); 
            expect(loginUser.body.message).toBe("Login successful"); 
            expect(loginUser.body.user.name).toBe(existingUser.body.user.name); 
            expect(loginUser.body.user.email).toBe(existingUser.body.user.email); 

            expect(loginUser.headers["set-cookie"]).toBeDefined(); 
            expect(loginUser.headers["set-cookie"][0]).toContain("HttpOnly"); 
            expect(loginUser.body.user.password).toBeUndefined(); 
            expect(loginUser.body.user.passwordHash).toBeUndefined(); 

        }); 
        it.todo("rejects invalid credentials"); 
    }); 

    describe("GET /auth/me", () => {
        const agent = request.agent(app); 
        it("returns the current user when authenticated", async () => {
            await agent
                .post("/auth/register")
                .send(validUserData);

            await agent
                .post("/auth/login")
                .send({
                email: validUserData.email,
                password: validUserData.password
                });

            const response = await agent.get("/auth/me");

            expect(response.body.user.email).toBe(validUserData.email); 
        }); 
        it("rejects unauthenticated requests", async () => {
            const response = await request(app).get("/auth/me"); 

            expect(response.status).toBe(401); 
        }); 
    })
} ); 

// Arrange
// act
// assesrt