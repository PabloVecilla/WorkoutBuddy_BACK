const request = require("supertest"); 
const app = require("../src/app"); 
const { Exercise } = require("../src/models"); 

describe("Exercise", () => {
    const validUserData = {
        name: "Carla",
        email: "carla@example.com",
        password: "123456"
    };

    const loginData = { email: validUserData.email, password: validUserData.password }

    describe("GET /exercises", () => {
        it("returns all exercises to a logged in user", async () => {
            const agent = request.agent(app); 

            await agent.post("/auth/register").send(validUserData); 
            await agent.post("/auth/login").send(loginData); 

            const response = await agent.get("/exercises"); 

            expect(response.status).toBe(200); 

            const exercisesInDB = await Exercise.findAll(); 
            expect(response.body.count).toBe(exercisesInDB.length); 
        })

        it("rejects unauthorized requests", async () => {
            const response = await request(app).get("/exercises"); 

            expect(response.status).toBe(401); 
            expect(response.body.message).toBe("Unauthorized"); 
        })
    })

    describe("GET /exercises/:id", () => {
        it ("returns exercise by valid id to logged in user", async () => {
            const agent = request.agent(app); 

            await agent.post("/auth/register").send(validUserData); 
            await agent.post("/auth/login").send(loginData); 

            const exercise = await Exercise.findOne({ 
                attributes: ["id"],
                order: [["id", "ASC"]]
             });
             
            const firstExerciseId = exercise?.id ?? null; 

            const response = await agent.get(`/exercises/${firstExerciseId}`); 

            expect(response.status).toBe(200); 
            expect(response.body.exercise).toEqual( // toBe() for exact values  toEqual() for objects
                expect.objectContaining({
                  id: firstExerciseId,
                })
              );
        })

        it("returns 404 to invalid id to logged in user", async () => {
            const agent = request.agent(app); 

            await agent.post("/auth/register").send(validUserData); 
            await agent.post("/auth/login").send(loginData); 

            const exercise = await Exercise.findOne({ 
                attributes: ["id"],
                order: [["id", "ASC"]]
             });
             
            const firstExerciseId = exercise?.id ?? null; 

            const response = await agent.get(`/exercises/${firstExerciseId - 1}`); 

            expect(response.status).toBe(404); 
            expect(response.body.exercise).toBeUndefined(); 
            expect(response.body.error.message).toBe("Exercise not found"); 
        })

        it("returns unauthorized to valid id to invalid user", async () => {
            const response = await request(app).get("/exercises"); 

            expect(response.status).toBe(401); 
            expect(response.body.message).toBe("Unauthorized"); 
        })
    })
    describe("GET /movement-pattern/:movementPattern", () => {
        it("returns exercises by valid movement pattern to an authenticated user", async () => {
            const agent = request.agent(app); 

            await agent.post("/auth/register").send(validUserData); 
            await agent.post("/auth/login").send(loginData);

            const exercise = await Exercise.findOne({ 
                attributes: ["id", "movementPattern"],
                order: [["id", "ASC"]]
             });

            const movementPattern = exercise?.movementPattern ?? null; 
            
            const response = await agent.get(`/exercises/movement-pattern/${movementPattern}`); 

            expect(response.status).toBe(200); 
            expect(response.body.exercises[0].movementPattern).toBe(movementPattern); 
        })
        it("rejects unauthorized exercise-by-movement-pattern requests", async () => {
            const exercise = await Exercise.findOne({ 
                attributes: ["id", "movementPattern"],
                order: [["id", "ASC"]]
             });

            const movementPattern = exercise?.movementPattern ?? null; 
            
            const response = await request(app).get(`/exercises/movement-pattern/${movementPattern}`); 

            expect(response.status).toBe(401); 
            expect(response.body.exercises).toBeUndefined(); 
        })
        it("returns 404 to user with invalid movement-pattern requests", async () => {
            const agent = request.agent(app); 

            await agent.post("/auth/register").send(validUserData); 
            await agent.post("/auth/login").send(loginData);
            
            const response = await agent.get("/exercises/movement-pattern/shoulder_shruggg"); 

            expect(response.status).toBe(404); 
            expect(response.body.exercises).toBeUndefined(); 
        })
    })
})