'use strict';
import mongoose from 'mongoose';
import  dbConfig from '../config/dbs.config.js';

const connectString = `mongodb://${dbConfig.db.host}:${dbConfig.db.port}/${dbConfig.db.name}?directConnection=true`;
import logger from "../logger.js";
import 'colors';
class Database {
constructor() {
    this.connect();
}
    connect(type = 'mongodb'){
        mongoose.connect(connectString)
            .then(_ => {
                console.log('Connected mongodb'.bold.green.bgGreen);
                logger.info('Connected mongodb');
            })
            .catch(err => {
                // console.log(`Error connect mongodb:${new Date()} ${err}`.bold.red);
                // logger.error('Error connect mongodb', err);
            });
        mongoose.connection.on('error', (err) => {
            console.log(`Error connect mongodb:${new Date()} ${err}`.bold.red);
            logger.error('Error connect mongodb', err);
        });
        mongoose.connection.on('disconnected', (msg) => {
            console.log(`Mongodb disconnected:${new Date()} ${msg}`.bold.red);
            logger.error('Mongodb disconnected', msg);
        })
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

// const instanceMongoDB = Database.getInstance();
export default Database;
