import mongoose from 'mongoose';
const Schema = mongoose.Schema({
    login:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});
const User = mongoose.model('User',Schema);
module.exports = User;