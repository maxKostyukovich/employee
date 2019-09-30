import mongoose from 'mongoose';
import { GENDER } from "../constants";

const Schema = mongoose.Schema({
        fullName:{
            type: String,
            required: true
        },
        gender: {
            type: String,
            enum: Object.values(GENDER),
            required: true,
        },
        dateOfBirth: {
            type: Date,
            required: true,
        },
        contactInformation: {
            type: String
        },
        salary:{
            type:Number,
            required: true
        },
        position: {
            type: String,
            required:true
        }
    },
    {
        timestamps: true
    }
);
const Employee = mongoose.model('Employee',Schema);
module.exports = Employee;