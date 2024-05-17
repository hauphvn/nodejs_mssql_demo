'use strict'

import {model, Schema} from 'mongoose';

const DOCUMENT_NAME = 'UserToken';
const COLLECTION_NAME = 'UserTokens';

const userTokenSchema = new Schema({
        userId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        token: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            expires: 2 * 86400
        },
    },
    {
        collection: COLLECTION_NAME
    },
);
export default model(DOCUMENT_NAME, userTokenSchema);
