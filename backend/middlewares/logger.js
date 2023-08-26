const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  transports: [],
});

logger.add(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      winston.format.printf(
        ({ timestamp, level, message }) => `${timestamp} ${level} ${message}`
      )
    ),
  })
);

logger.add(
  new winston.transports.File({
    filename: "requestLogs.log",
  })
);

const requestLoggerMiddleware = (req, res, next) => {
  logger.log("info", `${req.method} ${req.url}`);
  next();
};

const errorLogger = winston.createLogger({
  level: "error",
  transports: [],
});

errorLogger.add(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      winston.format.printf(
        ({ timestamp, level, message }) => `${timestamp} ${level} ${message}`
      )
    ),
  })
);

errorLogger.add(
  new winston.transports.File({
    filename: "error.log",
  })
);

const errorLoggerMiddleware = (err, req, res, next) => {
  errorLogger.log("error", `${req.method} ${req.url} ${err.message}`);
  res.status(500).send("Something broke!");
};

module.exports = {
  logger,
  errorLogger,
  requestLoggerMiddleware,
  errorLoggerMiddleware,
};
