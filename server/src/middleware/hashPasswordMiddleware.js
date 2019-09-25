import bcrypt from 'bcrypt'
import { SALT } from '../constants'

module.exports = (req, res, next) => {
    const password = req.body.password;
    bcrypt.hash(password, SALT, (err, hash) => {
        if(!err) {
            req.body.password = hash;
            next();
        } else {
            next(new Error ("Password is not hashed"));
        }
    });
};