const express = require('express');
const {register, login } = require('../../controllers/Auth/userController');
const {signUpValidation, signInValidation} = require('../../helper/userValidation');
const requireAuth = require('../../middleware/requireAuth')

const authRouter = express.Router();



authRouter.post('/login', signInValidation, requireAuth , login)
authRouter.post('/register', signUpValidation, requireAuth(), register)

module.exports = authRouter


