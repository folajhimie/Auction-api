const userModel = require('../models/Auth/User');

const { validName, validNumber, validPhoneNumber, validEmail, validTime } = require('./regEx');


const signUpValidation = (req, res, next) => {

    const { firstName, lastName, email, password, confirmPassword, resetPassword, mobile } = req.body;
    const signUpErrors = {};

    console.log(firstName, lastName)
    if(!firstName || firstName.length < 3 || !validName.test(firstName)){
        signUpErrors.message = "FirstName Should be provided."
        return signUpErrors
    }
    if(!lastName || lastName.length < 3 || !validName.test(lastName)){
        signUpErrors.message = "LastName Should be provided."
        return signUpErrors
   
    }
    if(!email){
        signUpErrors.message = "Email Should be provided."
        return signUpErrors
   
    }
    if(!validName.test(mobile)){
        signUpErrors.message = "Your Mobile Number isn't up to Eleven Digits." 
        return signUpErrors
   
    }
    if(firstName){
        console.log("freedom")
        
    }

    next()

};


const signInValidation = (body) => {
    const { email, password } = body;
    const signInErrors  = {};

    if(!email){
        signInErrors.message = "Email Should be provided."
        
    }

    if(!password ){
        signInErrors.message = "Please Provide Your Password" 
    }

    return signUpErrors;

};

module.exports = {signUpValidation, signInValidation}