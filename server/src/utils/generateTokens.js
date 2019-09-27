import jwt from 'jsonwebtoken'
import { JWT } from '../constants'

const generateAccessToken = (userId) => {
    const payload ={
        _id: userId,
        type: JWT.tokens.access.type,
    };
    const options = { expiresIn: JWT.tokens.access.expiresIn };
    return jwt.sign(payload, JWT.secret, options);
};

module.exports = {
  generateAccessToken,
};