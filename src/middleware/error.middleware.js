const {
  ValidationError,
  UniqueConstraintError,
  ForeignKeyConstraintError,
} = require("sequelize");

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const isProduction = process.env.NODE_ENV === "production";
  const isOperational = err.isOperational === true;

  let statusCode = isOperational ? err.statusCode : 500;
  let code = isOperational ? err.code : "INTERNAL_ERROR";
  let message = err.message || "Unexpected server error";
  let details = isOperational ? err.details : undefined;

  // Normalize expected Sequelize errors.
  if (err instanceof UniqueConstraintError) {
    statusCode = 409;
    code = "RESOURCE_ALREADY_EXISTS";
    message = "Resource already exists";
    details = undefined;
  } else if (err instanceof ValidationError) {
    statusCode = 400;
    code = "VALIDATION_ERROR";
    message = "Invalid data";
    details = undefined;
  } else if (err instanceof ForeignKeyConstraintError) {
    statusCode = 409;
    code = "RESOURCE_CONFLICT";
    message = "Resource conflicts with related data";
    details = undefined;
  }

  // Log genuine server errors after normalization.
  if (statusCode >= 500) {
    console.error({
      event: "request_error",
      method: req.method,
      path: req.originalUrl,
      statusCode,
      errorName: err.name,
      message: err.message,
      stack: err.stack,
    });
  }

  const hideInternalError = isProduction && statusCode >= 500;

  const response = {
    success: false,
    error: {
      code: hideInternalError ? "INTERNAL_ERROR" : code,
      message: hideInternalError
        ? "Unexpected server error"
        : message,
    },
  };

  if (!isProduction && details) {
    response.error.details = details;
  }

  return res.status(statusCode).json(response);
};

module.exports = errorHandler;