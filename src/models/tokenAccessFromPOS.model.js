'use strict'

import {model, Schema} from 'mongoose';

const DOCUMENT_NAME = 'TokenAccessFromPOS';
const COLLECTION_NAME = 'TokensAccessFromPOS';

const tokenAccessFromPOSSchema = new Schema({
        token: {
            type: String,
            required: true,
            unique: true
        },
        status: {
            type: Boolean,
            default: true
        },
        address: {
            type: String,
            default: ''
        }
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME
    },
);
export default model(DOCUMENT_NAME, tokenAccessFromPOSSchema);
