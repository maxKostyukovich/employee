import mongoose from 'mongoose';
require('../models/user.model');
import {DB_CONNECTION_STRING} from '../constants';
mongoose.connect(DB_CONNECTION_STRING, {useNewUrlParser: true,useUnifiedTopology: true},(err) => {
    if(err){
        console.log(err);
        process.exit(1);
    }
});
mongoose.set('debug',true);
mongoose.set('useFindAndModify', false);
module.exports = mongoose;