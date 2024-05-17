'use strict';
import dotEnv from 'dotenv';
dotEnv.config();
const development = {
    app: {
        port: process.env.DEV_APP_PORT || 3000
    },
    db: {
        port: process.env.DEV_DB_PORT || 1433,
        host: process.env.DEV_DB_HOST || '127.0.0.1',
        name: process.env.DEV_DB_NAME || 'demo_pkgems',
        user: process.env.DEV_DB_USER || 'sa',
        password: process.env.DEV_DB_PASSWORD || ''
    }
};

const production = {
    app: {
        port: process.env.PRODUCTION_APP_PORT || 3000
    },
    db: {
        port: process.env.PRODUCTION_DB_PORT || 1433,
        host: process.env.PRODUCTION_DB_HOST || '127.0.0.1',
        name: process.env.PRODUCTION_DB_NAME || 'demo_pkgems',
        user: process.env.PRODUCTION_DB_USER || 'sa',
        password: process.env.PRODUCTION_DB_PASSWORD || '',
    }
}
const config = {development, production}
const env = process.env.NODE_ENV || 'development';
export default config[env];
