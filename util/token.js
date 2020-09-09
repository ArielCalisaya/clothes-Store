const jwt = require("jsonwebtoken")

const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isADM: user.isADM,

    }, 'somethingSecret', {
        expiresIn: '48h'
    })
}

module.exports = {getToken}