const rateLimit = require("express-rate-limit"); 
const AppError = require("../utils/AppError"); 

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (_req, _res, next) => {
        next(
          new AppError(
            429,
            "LOGIN_RATE_LIMIT_EXCEEDED",
            "Too many login attempts. Try again later."
          ));
    }
}); 

module.exports = loginLimiter; 