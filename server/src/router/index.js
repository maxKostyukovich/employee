import express from 'express';
import userController from '../controllers/userController'
import validationMiddleware from '../middleware/validationMiddleware'
import hashPasswordMiddleware from '../middleware/hashPasswordMiddleware'
import authMiddleware from '../middleware/authMiddleware'
import employeeController from '../controllers/employeeController'
const router = express.Router();

router.get('/user/:id', userController.getUserById);
router.get('/user', authMiddleware, userController.getUser);
router.post('/user', validationMiddleware.userValidation, hashPasswordMiddleware, userController.createUser);
router.post('/login',validationMiddleware.userLoginValidation, userController.loginUser);

router.post('/employee', authMiddleware, validationMiddleware.employeeCreateValidation, employeeController.createEmployee);
router.get('/employees', authMiddleware, employeeController.getAllEmployees);
router.delete('/employee/:id', authMiddleware, employeeController.deleteEmployee);
router.put('/employee/:id', authMiddleware, employeeController.updateEmployee);

module.exports = router;