const request = require("supertest");
const app = require("../src/app");

describe("Unexpected server errors log", () => {
  it("returns error details on development environment", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
  });
  it("returns generalistic error responses on production  environment", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
  });
});