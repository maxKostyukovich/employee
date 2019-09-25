import express from 'express';
import userController from '../controllers/userController'
import validationMiddleware from '../middleware/validationMiddleware'
import hashPasswordMiddleware from '../middleware/hashPasswordMiddleware'
const router = express.Router();

router.get('/user/:id', userController.getUserById);
router.post('/user', validationMiddleware.userValidation, hashPasswordMiddleware, userController.createUser);

module.exports = router;