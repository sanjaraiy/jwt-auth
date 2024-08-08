const User = require("../models/userModel");
const emailValidator = require('email-validator')

const signupHandler = async (req, res, next) => {
    const {username, email, password, confirmPassword} = req.body;
    console.log(username, email, password, confirmPassword);
     
    if(!username || ! email || !password || !confirmPassword){
        return res.status(400).json({
            success: false,
            message: "Every field is required",
        })
    }
     
    if(password !== confirmPassword){
         return res.status(400).json({
            success: false,
            message: "Password doesn't match with confirmPassword"
         })
    }

    const validEmail = emailValidator.validate(email);
    
    if(!validEmail){
        return res.status(400).json({
            success: false,
            message: "Please provide a valid email address",
        })
    }

    const isUser = await User.findOne({email});

    if(isUser){
        return res.status(400).json({
            success: false,
            message: "Email is already taken",
        })
    }
    
   
    try {
        const userInfo = User(req.body);
        const result = await userInfo.save();

        return res.status(201).json({
            success: true,
            data: result,
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
} 

const signinHandler = async (req, res, next) => {
     const {email, password} = req.body;

     if(!email || !password){
        return res.status(400).json({
            success: false,
            message: "Every field is required",
        })
     }
     
     try {
        const isUser = await User.findOne({email}).select('+password');
        
        if(!isUser || isUser.password !== password){
           return res.status(400).json({
               success: false,
               message: "Invalid credentials",
           })
        }
        
        const token = isUser.jwtToken();
        isUser.password=undefined;
   
        const cookieOption = {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
        }
   
        res.cookie("token", token, cookieOption);
        res.status(200).json({
           success: true,
           data: isUser,
        })
     } catch (error) {
         res.status(400).json({
            success: false,
            message: error.message
         })
     }

}

module.exports = {
    signupHandler,
    signinHandler,
}

