const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        
        type: String,
        maxlength: 20,
        minlength: [3, 'Minimum firstname length is 6 characters'],
        trim: true
    },
    lastName: {
        type: String,
        maxlength: 20,
        minlength: [3, 'Minimum lastname length is 6 characters'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is Invalid')
            }
        },
        lowercase: [true, 'Please ensure your email should be in lowercase'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password should not contain word: password')
            }
        },
        minlength: [6, 'Minimum password length is 6 characters'],
        select: false,
        trim: true
    },
    confirmPassword: {
        type: String,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password should not contain word: password')
            }
        },
        trim: true,
        minlength: [6, 'Minimum password length is 6 characters'],
        minlength: [6, 'Minimum password length is 6 characters'],
        required: true,
    },
    resetPassword: {
        type: String,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password should not contain word: password')
            }
        },
        trim: true,
        minlength: [6, 'Minimum password length is 6 characters'],
        required: true,
    },
    mobile: {
        type: Number,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
            throw new Error('Phone is invalid');
            }
        },
        required: [true, 'What is your contact number?']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
},
    {
        timestamps: true,
    }
)

const User = mongoose.model('User', userSchema);

module.exports  = User;