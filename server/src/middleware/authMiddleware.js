import jwt from 'jsonwebtoken'
import { JWT, HELP_AUTH } from '../constants'
import UnauthorizedError from '../errorHandler/UnauthorizedError'
module.exports = (req, res, next) => {
    try{
        const authHeader = req.get(HELP_AUTH.Authorization);
        if(!authHeader){
            return next(new UnauthorizedError());
        }
        const token = authHeader.replace('Bearer ', '');
        req.payload = jwt.verify(token, JWT.secret);
        next();
    } catch(e){
        if(e instanceof jwt.TokenExpiredError){
            next(new UnauthorizedError('Token expired'));
        }
        if (e instanceof jwt.JsonWebTokenError) {
            next(new UnauthorizedError('Invalid token'));
        }
    }
};
