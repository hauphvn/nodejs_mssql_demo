'use strict';
import 'colors';
import sql from 'mssql';
import configDB from '../config/dbs.config.js';

// export const getConnection = async () => {
//     try {
//         const pool = await sql.connect({
//                 user: configDB.db.user,
//                 password: configDB.db.password,
//                 server: configDB.db.host,
//                 database: configDB.db.name,
//                 port: +configDB.db.port,
//                 options: {
//                     enableArithAbort: false, // set true if you're on windows azure
//                     encrypt: false, // set true if you're on windows azure
//                     trustServerCertificate: true // change to true for local dev / self-signed certs
//                 }
//             });
//         console.log('Connected mssql'.bold.green.bgGreen);
//         return pool;
//     } catch (error) {
//         console.error(error);
//     }
// };
//
// export { sql };
class Database {
    constructor() {
        this._db = null;
    }

    async connect() {
        if (!this._db) {
            try {
                this._db = await sql.connect({
                    user: configDB.db.user,
                    password: configDB.db.password,
                    server: configDB.db.host,
                    database: configDB.db.name,
                    port: +configDB.db.port,
                    options: {
                        enableArithAbort: false, // set true if you're on windows azure
                        encrypt: false, // set true if you're on windows azure
                        trustServerCertificate: true // change to true for local dev / self-signed certs
                    }
                });
                console.log('Connected mssql'.bold.green.bgGreen);
                return this._db;
            } catch (error) {
                console.error(error);
            }
        }
    }

    static async getConnection() {
        if (!Database.instance) {
            Database.instance = new Database();
            await Database.instance.connect();
        }
        return Database.instance._db;
    }
}

export {Database, sql};
