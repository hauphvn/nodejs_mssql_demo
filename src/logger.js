import winston from 'winston';
import path from "path";
import { fileURLToPath } from 'url';
import 'winston-daily-rotate-file';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//DailyRotateFile func()
const fileRotateTransport = new  winston.transports.DailyRotateFile({
    filename: path.join(__dirname,"../logs/rotate-%DATE%.log"),
    datePattern: "YYYY-MM-DD",
    maxFiles: "14d",
});
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        winston.format.json()
    ),
    transports:[
        fileRotateTransport,
        new winston.transports.Console(),
        new winston.transports.File({
            filename: path.join(__dirname,'../logs/common.log'),
            level: 'info'
        })
    ]
});
export const loggingIp = (reason, ip) =>{
    if(process.env.NODE_ENV === 'production'){
        logger.info(`Log: ${reason} at IP::: ${ip}`);
    }
}
export default logger;
