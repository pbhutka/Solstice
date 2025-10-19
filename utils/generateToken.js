const jwt = require("jsonwebtoken");

const token = (user)=>{
    return jwt.sign({email: user.email, _id: user._id}, process.env.SECRET_KEY)
}
module.exports.generateToken = token;

