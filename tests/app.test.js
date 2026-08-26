const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  it("returns 200", async () => {
    const response = await request(app).get("/");

    console.log("Response status for /: ", response.status); 

    expect(response.status).toBe(200);
  });
});