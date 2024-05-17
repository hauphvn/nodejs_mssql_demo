import express from 'express';
import {config} from 'dotenv';
import cors from "cors";
import routes from "./routes/index.js";
import compression from 'compression';
import helmet from "helmet";
import morgan from 'morgan';
import createError from 'http-errors';
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
config(); // allow access environment var

import {Database} from  './dbs/init.mssql.js';
import StatusCodeInternal from "./core/statusCodeInternal.js";
import ReasonMessageInternal from "./core/reasonMessageInternal.js";
import {limiter} from "./utils/common.js";

const app = express();
Database.getConnection();

app.use(morgan('combined'));
app.use(express.json()); // middleware allow get json object in request body
app.use(compression());
app.use(helmet())
app.use(express.urlencoded({extended: true}));
app.use(limiter);
app.use('/', cors(corsOptions), routes);

app.use((req, res, next) => {
    next(createError(StatusCodeInternal.NOT_FOUND,ReasonMessageInternal.NOT_FOUND))
})

app.use((error, req, res, next) => {
    console.log('Error system:'.rainbow.bgRed.bold, error);
    res?.status(error?.status || 500).json({
        message: error?.message || ReasonMessageInternal.INTERNAL_SERVER_ERROR,
        status: error?.status || StatusCodeInternal.INTERNAL_SERVER_ERROR,
        error_code: error?.code || StatusCodeInternal.INTERNAL_SERVER_ERROR
    })
})
export default app;
