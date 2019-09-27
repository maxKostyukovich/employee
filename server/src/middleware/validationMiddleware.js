import createUserValidationScheme from '../utils/userValidationScheme'
import loginUserValidationScheme from '../utils/userLoginValidationScheme'
const ValidationError = require('../errorHandler/ValidationError');
module.exports.userValidation = (req, res, next) => {
    createUserValidationScheme.validate(req.body)
        .then(() => next())
        .catch(err => next(new ValidationError(err.message)));
};

module.exports.userLoginValidation = (req, res, next) => {
    loginUserValidationScheme.validate(req.body)
        .then(() => next())
        .catch(err => next(new ValidationError(err.message)));
};