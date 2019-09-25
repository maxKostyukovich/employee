import User from '../models/user.model';
import UserNotFound from '../errorHandler/UserNotFound'
module.exports.getUserById = async(req, res, next) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        res.send(user);
    } catch (e) {
        return next(new UserNotFound());
    }
};

module.exports.createUser = async (req, res, next) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        console.log(result);
        res.send(result);
    } catch(e){
        next(e);
    }

};