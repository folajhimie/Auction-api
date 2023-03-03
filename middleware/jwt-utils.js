const jwt = require("jsonwebtoken");
const configData = require("../config/config");


const generateAccessToken = (payload) => {
    const token = jwt.sign(
        payload, 
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "1h",
        }

    );
    return token;

}

const generateRefreshToken = (payload) => {
    const token = jwt.sign(
        payload, 
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: "1h", 
        }
    )

    return token;
}

const verifyAccessToken = (accessToken) => {
    const token = jwt.verify(
       accessToken,
       process.env.ACCESS_TOKEN_SECRET 
    )

    return token;
}

const verifyRefreshToken = (refreshToken) => {
    const token = jwt.verify(
       refreshToken,
       process.env.REFRESH_TOKEN_SECRET
    )

    return token;
}


module.exports = { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken }