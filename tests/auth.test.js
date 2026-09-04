const request = require("supertest"); 
const app = require("../src/app"); 
const loginLimiter = require("../src/middleware/rateLimit.middleware"); 
const { User } = require("../src/models"); 

describe ("Authentication", () => {
    const validUserData = {
        name: "Carla",
        email: "carla@example.com",
        password: "TestUser1!"
      }
      const invalidUserData = {
        name: "Carla",
        email: "carla123@example.com",
        password: "TestUser33!"
      }
    beforeEach(() => {
        if (loginLimiter && typeof loginLimiter.resetKey === 'function') {
            loginLimiter.resetKey('::1');
            loginLimiter.resetKey('127.0.0.1');
            loginLimiter.resetKey('::ffff:127.0.0.1');
        }
    });

    describe("POST /auth/register", () => {
        it("registers a new user", async () => {
            const response = await request(app).post("/auth/register").send(validUserData); 

            expect(response.status).toBe(201); 
            expect(response.body.data.name).toBe("Carla"); 
            expect(response.body.data.email).toBe("carla@example.com"); 

            expect(response.body.data.passwordHash).toBeUndefined();
            expect(response.body.data.password).toBeUndefined();
          
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
            expect(response.body.error.message).toBe("User already registered"); 

            expect(response.body.user).toBeUndefined(); 

            const users = await User.findAll({ where: { email: "carla@example.com" } }); 
            expect(users.length).toBe(1); 

        }); 
        
        it("rejects invalid name", async () => {
            const response = await request(app).post("/auth/register").send({
                name: "C",
                email: "carla@example.com",
                password: "TestUser1!"
              }); 
            expect(response.status).toBe(400); 
            expect(response.body.error.message).toBe("Invalid name. Must have between 2 and 60 characters"); 

            expect(response.body.data).toBeUndefined(); 
        }); 
        it("rejects invalid email", async () => {
            const response = await request(app).post("/auth/register").send({
                name: "Carla",
                email: "carlaexample.com",
                password: "TestUser1!"
              }); 
            expect(response.status).toBe(400); 
            expect(response.body.error.message).toBe("Invalid email address"); 

            expect(response.body.data).toBeUndefined(); 
        }); 

        it("rejects invalid password", async () => {
            const response = await request(app).post("/auth/register").send({
                name: "Carla",
                email: "carla@example.com",
                password: "123456"
              }); 
            expect(response.status).toBe(400); 
            expect(response.body.error.message).toBe("Password must contain 8–64 characters, including uppercase, lowercase, number, and special character"); 

            expect(response.body.data).toBeUndefined(); 
        }); 
    }); 

    describe("POST /auth/login", () => {
        it("logs in a user with valid credentials", async () => {
            const existingUser = await request(app).post("/auth/register").send(validUserData); 
            const loginUser = await request(app).post("/auth/login").send({ email: validUserData.email, password: validUserData.password }); 

            expect(loginUser).toBeDefined(); 

            expect(loginUser.status).toBe(200); 
            expect(loginUser.body.message).toBe("Login successful"); 
            expect(loginUser.body.data.name).toBe(existingUser.body.data.name); 
            expect(loginUser.body.data.email).toBe(existingUser.body.data.email); 

            expect(loginUser.headers["set-cookie"]).toBeDefined(); 
            expect(loginUser.headers["set-cookie"][0]).toContain("HttpOnly"); 
            expect(loginUser.body.data.password).toBeUndefined(); 
            expect(loginUser.body.data.passwordHash).toBeUndefined(); 

        }); 
        it("rejects invalid credentials", async () => {
            const existingUser = await request(app).post("/auth/register").send({
                name: "Carla",
                email: "carla123@example.com",
                password: "TestUser1!"
              }); 

            const loginUser = await request(app).post("/auth/login").send({ email: invalidUserData.email, password: invalidUserData.password }); 

            expect(loginUser.status).toBe(401);
            
            expect(loginUser.body).toEqual({
                success: false,
                error: {
                    code: "INVALID_CREDENTIALS",
                    message: "Invalid credentials"
                }
            });
        }); 

        it("rate limits more than 5 invalid credentials login tries", async () => {
            await request(app).post("/auth/login").send({ email: invalidUserData.email, password: invalidUserData.password }); 
            await request(app).post("/auth/login").send({ email: invalidUserData.email, password: invalidUserData.password }); 
            await request(app).post("/auth/login").send({ email: invalidUserData.email, password: invalidUserData.password }); 
            await request(app).post("/auth/login").send({ email: invalidUserData.email, password: invalidUserData.password }); 
            await request(app).post("/auth/login").send({ email: invalidUserData.email, password: invalidUserData.password }); 
            const response = await request(app).post("/auth/login").send({ email: invalidUserData.email, password: invalidUserData.password }); 

            expect(response.body.error.message).toBe('Too many login attempts. Try again later.'); 
            expect(response.status).toBe(429); 
        })
    }); 

    describe("GET /auth/me", () => {
        
        it("returns the current user when authenticated", async () => {
            const agent = request.agent(app); 
            const registerResponse = await agent
                .post("/auth/register")
                .send(validUserData);

            await agent
                .post("/auth/login")
                .send({
                email: validUserData.email,
                password: validUserData.password
                });

            const response = await agent.get("/auth/me");

            expect(response.body.data.email).toBe(validUserData.email); 
        }); 
        it("rejects unauthenticated requests", async () => {
            const response = await request(app).get("/auth/me"); 

            expect(response.status).toBe(401); 
        }); 
    })
} ); 

// Arrange
// act
// assert