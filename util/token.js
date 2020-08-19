const jwt = require("jsonwebtoken")

const getToken = () => {
    return jwt.sign(user, 'something', {
        expiresIn: '48h'
    })
}

module.exports = {getToken}