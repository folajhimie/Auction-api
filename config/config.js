const dotenv = require('dotenv')

// Using the dotenv to manage your ENV variables in YOUR Node.JS 

dotenv.config();

const configData = {
    PORT: process.env.PORT || 7050,
    HOST: process.env.HOST,
    MONGODB_URL: process.env.MONGODB_URL,
    ASSET_URL: process.env.ASSET_URL || 'http://localhost:7979',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS) || 10,
    // JWT_SECRET: process.env.JWT_SECRET,
    // PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
    MONGODB_URI: process.env.MONGODB_URI,
}

module.exports = configData