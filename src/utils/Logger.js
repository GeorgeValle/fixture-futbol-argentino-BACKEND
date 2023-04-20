import log4js from 'log4js'

log4js.configure({
    appenders: {
        console: { type: "console" },
        debugFile: { type: "file", filename: './debug.log'}
    },
    categories: {
        default: {
            appenders: ["console"], level: "all"
        },
        DEV: {
            appenders: ["debugFile"], level: "DEBUG"
        },
        ErrLogger: {
            appenders: ["console"], level: "ERROR"
        },
        LogInfo:{
            appenders: ["console"], level: "DEBUG"
        }
    }
})

// for dev
const logger = log4js.getLogger('DEV')
//register the error
const errorLogger = log4js.getLogger('ErrLogger')
//register the info
const logInfo = log4js.getLogger('LogInfo')

export {
        logger,
        errorLogger,
        logInfo
        }

