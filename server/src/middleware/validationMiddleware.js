import scheme from '../utils/userValidationScheme'
const ValidationError = require('../errorHandler/ValidationError');
module.exports.userValidation = (req, res, next) => {
    scheme.validate(req.body)
        .then(() => next())
        .catch(err => next(new ValidationError(err.message)));
};