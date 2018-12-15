import winston from 'winston'
const logger = new (winston.Logger)({
    transports: [
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        }),
    ],
    exceptionHandlers: [
        new winston.transports.Console({
            level: 'error',
            handleExceptions: true,
            json: false,
            colorize: true
        }),
    ]
});
export default logger;