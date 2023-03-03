const {signUpValidation, signInValidation} = require('../helper/userValidation');

const validateSignUp = async(req, res, next) => {
    const errors = await signUpValidation(req.body);
    console.log("first")
    if(Object.keys(errors).length > 0) {
        return res.send(errors)
    }
    return next();
}

const validateSignIn = async(req, res, next) => {
    const errors = await signInValidation(req.body);
    console.log("kettle")
    if(Object.keys(errors).length > 0) {
        return res.send(errors)
    }
    return next();
}


module.exports = {validateSignUp, validateSignIn}