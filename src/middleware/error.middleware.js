const errorHandler = (err, _req, res, _next) => {
    const statusCode = err.statusCode || 500;
    const isProduction = process.env.NODE_ENV === "production";
  
    const response = {
      success: false,
      error: {
        code: err.code || "INTERNAL_ERROR",
        message:
          statusCode === 500 && isProduction
            ? "Unexpected server error"
            : err.message
      }
    };
  
    if (!isProduction && err.details) {
      response.error.details = err.details;
    }
  
    res.status(statusCode).json(response);
  };
  
  module.exports = errorHandler;