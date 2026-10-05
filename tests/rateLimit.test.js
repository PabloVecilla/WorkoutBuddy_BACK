const request = require("supertest");
const app = require("../src/app");

describe("Rate limit at GET /", () => {
  it("returns 429 when api limit is exceeded", async () => {
    const agent = request.agent(app);
    const maxRequests = 150;
    for (let x = 0; x < maxRequests; ++x) await request(app).get("/");

    const response = await request(app).get("/");
    expect(response.status).toBe(429);
    expect(response.body).toEqual({
      success: false,
      error: {
        code: "API_RATE_LIMIT_EXCEEDED",
        message: "Rate limit exceeded. Try again later.",
      },
    });
  });
});
