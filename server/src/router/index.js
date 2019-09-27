import express from 'express';
import userController from '../controllers/userController'
import validationMiddleware from '../middleware/validationMiddleware'
import hashPasswordMiddleware from '../middleware/hashPasswordMiddleware'
import authMiddleware from '../middleware/authMiddleware'
const router = express.Router();

router.get('/user/:id', userController.getUserById);
router.get('/user', authMiddleware, userController.getUser);
router.post('/user', validationMiddleware.userValidation, hashPasswordMiddleware, userController.createUser);
router.post('/login',validationMiddleware.userLoginValidation, userController.loginUser);

module.exports = router;