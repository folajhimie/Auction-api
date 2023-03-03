const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    return bcrypt.hash(password, process.env.SALT_ROUNDS)
}

const comparePassword = (password, hashpassword) => {
    return bcrypt.compare(password, hashpassword)
}

module.exports = { hashPassword, comparePassword}