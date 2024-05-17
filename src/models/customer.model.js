import {Schema, model} from 'mongoose';

const DOCUMENT_NAME = 'Customer';
const COLLECTION_NAME = 'Customers';

const customerSchema = new Schema({
        name: {
            type: String,
            require: true,
        },
        avatar: {
            type: String,
            default: ''
        },
        phoneNumber: {
            type: String,
            require: true,
            unique: true
        },
        codeId: {
            type: String,
            unique: true,
        },
        point: {
            type: Number,
            default: 0,
        },
        dob: {
            type: String,
            default: '00/00/0000',
        },
        email: {
            type: String,
            unique: true,
            default: '',
        },
        level: {
            type: Number,
            enum: [1, 2, 3, 4],
            default: 1
        },
        password: {
            type: String
        },
        role: {
            type: String,
            enum: ['member', 'staff'],
            default: 'member'
        },
        status: {
            type: Boolean,
            require: true,
            default: true,
        },
        isInit: {
            type: Boolean,
            default: true
        },
        keyBE: {
            type: String,
        },
        updatedBy: {
            type: String,
            default: ''
        },
        updatedAtStore: {
            type: String,
            default: ''
        }
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME
    });
export default model(DOCUMENT_NAME, customerSchema);
