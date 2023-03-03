const { generateAccessToken, generateRefreshToken } = require('../../middleware/jwt-utils');
const { hashPassword, comparePassword} = require('../../middleware/password-utils');

const User = require('../../models/Auth/User');


const register = async(req, res) => {
    const { email, firstName, lastName , mobile, password } = req.body;

    const userExists = User.findOne({ where: { email }});

    if(!userExists){
        return res.status(401).send({ status: false, message: 'User already Exist'})
    }

    const hashedPassword = hashPassword(password)

    const user = new User({
        firstName,
        lastName, 
        email, 
        mobile,
        password: hashedPassword,
    });

    const createdUser = await user.save();

    if(!createdUser){
        res.status(401).send({ status: false, message: 'User was not Registered!'})
    }else {
        res
        .status(200)
        .json({
            _id: createdUser._id,
            firstName: createdUser.firstName,
            lastName: createdUser.lastName,
            email: createdUser.email,
            password: createdUser.password,
            mobile: createdUser.mobile,
            token: generateAccessToken(createdUser._id)
        })
    }
}


const login = (req, res) => {
    const { email , password } = req.body;

    const registeredUser = User.findOne({ email: email.toLowerCase()});
    const isPasswordCorrect = comparePassword(registeredUser.password, password);

    if(!registeredUser || !isPasswordCorrect){
        return res.status(401).send({ status: false , message: 'Invalid Credential'})
    }

    const access_token = generateAccessToken(registeredUser.email)

    return res
        .status(200)
        .json({ 
            status: true, 
            message: 'Login user successfully', 
            registeredUser,
            access_token
        }
    )
}

module.exports = {register, login}