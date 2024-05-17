'use strict'

import {model, Schema} from 'mongoose';

const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'Users';

const userSchema = new Schema({
        phone: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
        },
        fullName: {
            type: String,
            default: 'Chua cap nhat'
        },
        roles: {
            type: [String],
            enum: ['user', 'staff', 'guest', 'admin', 'supper_admin', 'cashier', 'manage_store'],
            default: ['user', 'staff']
        },
        checkingTimeId: {
            type: String,
        },
        storeName: {
            type: String
        }

    },
    {
        timestamps: true,
        collection: COLLECTION_NAME
    },
);
export default model(DOCUMENT_NAME, userSchema);
