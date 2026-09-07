class AppError extends Error {
  constructor(statusCode, code, message, details) {
    super(message); // inherited from Error  --> allows this.whatever

    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    this.isOperational = true;
  }
}

module.exports = AppError;
