const request = require("supertest");
const errorHandler = require('../src/middleware/error.middleware');
const express = require('express');
const AppError = require("../src/utils/AppError");

// Setup a throwaway Express app explicitly for this failure test
const app = express();

// Generate a crash endpoint  
app.get('/test-crash', (req, res) => {
    // Deliberately force an unhandled runtime error
    throw new Error('Database connection completely dropped!');
  });

  app.get('/4xx-error', (req, res) => {
    // Deliberately force an unhandled runtime error
    throw new AppError(400, "OPERATIONAL_ERROR", 'Operational error message for user');
  });

  const { // import error instances from sequelize
    ValidationError,
    UniqueConstraintError,
    ForeignKeyConstraintError
  } = require("sequelize");
  
  app.get("/unique-error", () => {
    throw new UniqueConstraintError({
      message: "Email already exists",
      errors: [],
      fields: { email: "test@example.com" },
    });
  });
  
  app.get("/validation-error", () => {
    throw new ValidationError("Invalid database value", []);
  });

  app.get("/constraint-error", () => {
    const parentError = new Error("insert violates foreign key constraint");
  
    parentError.sql = "INSERT INTO workout_exercises ...";
  
    throw new ForeignKeyConstraintError({
      parent: parentError,
      fields: ["exercise_id"],
      table: "workout_exercises",
      value: 999999,
      index: "workout_exercises_exercise_id_fkey",
    });
  });

app.use(errorHandler);

describe('GET /test-crash (Unexpected 500 Error Behavior)', () => {
  let consoleErrorSpy;

  beforeEach(() => {
    // Intercept calls to the server-side logger
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('logs the error details internally but hide it from the client', async () => {
    process.env.NODE_ENV = "production"; 

    const response = await request(app).get('/test-crash');

    // --- 1. Client-Side Validations ---
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: "Unexpected server error"
        }
    });
    // Ensure the sensitive stack trace was NOT leaked to the user
    expect(JSON.stringify(response.body)).not.toContain('Database connection completely dropped');

    // --- 2. Server-Side Validations ---
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.objectContaining ({
      event: "request_error", 
      method: "GET", 
      path: "/test-crash",
      statusCode: 500,
      message: "Database connection completely dropped!"
    }));
  });
  it ("returns error details in test env for debugging", async () => {
    process.env.NODE_ENV = "test"; 

    const response = await request(app).get('/test-crash');

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: "Database connection completely dropped!"
        }
    });
  });
  it ("returns error details in develop env for debugging", async () => {
    process.env.NODE_ENV = "develop"; 

    const response = await request(app).get('/test-crash');

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: "Database connection completely dropped!"
        }
    });
  }); 

  describe("GET /4xx-error (operational errors)", () => {
    it ("returns 4xx AppErrors in production env for user", async () => {
      process.env.NODE_ENV = "production"; 
  
      const response = await request(app).get('/4xx-error');
  
      expect(response.status).toBe(400);
      expect(response.body).toEqual({
          success: false,
          error: {
            code: "OPERATIONAL_ERROR",
            message: "Operational error message for user"
          }
      });
  })
  }); 
  describe("GET /unique-error", () => {
    it ("returns normalized RESOURCE_ALREADY_EXISTS sequelize errors", async () => {
      process.env.NODE_ENV = "production"; 
  
      const response = await request(app).get("/unique-error");
  
      expect(response.status).toBe(409);
      expect(response.body).toEqual({
        success: false,
        error: {
          code: "RESOURCE_ALREADY_EXISTS",
          message: "Resource already exists",
        },
      });
    })
  })
  describe("GET /validation-error", () => {
    it ("returns normalized VALIDATION_ERROR sequelize errors", async () => {
      process.env.NODE_ENV = "develop"; 
  
      const response = await request(app).get("/validation-error");
  
      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid data",
        },
      });
    }); 
  })
  describe ("GET /constraint-error", () => {
    it ("returns normalized RESOURCE_CONFLICT sequelize errors", async () => {
      process.env.NODE_ENV = "production"; 
  
      const response = await request(app).get("/constraint-error");
  
      expect(response.status).toBe(409);
      expect(response.body).toEqual({
        success: false,
        error: {
          code: "RESOURCE_CONFLICT",
          message: "Resource conflicts with related data",
        },
      });
    }); 
  })
});
