import User from '../models/user.model';
import UserNotFound from '../errorHandler/UserNotFound'
import UnauthorizedError from '../errorHandler/UnauthorizedError'
import { generateAccessToken } from '../utils/generateTokens'
import bcrypt from 'bcrypt'
module.exports.getUserById = async(req, res, next) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        res.send(user);
    } catch (e) {
        return next(new UserNotFound());
    }
};
module.exports.getUser = async (req, res, next) => {
  try {
      const user = await User.findById(req.payload._id);
      user.password = undefined;
      console.log(user);
      res.send(user);
  } catch(e){
      console.log(e);
      next(e);
  }
};

module.exports.createUser = async (req, res, next) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        const accessToken = generateAccessToken(savedUser._id);
        res.send({user: savedUser, accessToken});
    } catch(e){
        console.log(e);
        next(e);
    }
};

module.exports.loginUser = async(req, res, next) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if(!user){
            return next(new UnauthorizedError('Invalid credentials'));
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword){
            return next(new UnauthorizedError('Invalid credentials'));
        }
        const accessToken = generateAccessToken(user._id);
        user.password = undefined;
        res.send({user, accessToken})
    } catch(e){
        next(e);
    }
};