import generateToken from '../utills/generateToken.js'
import asyncHandler from "express-async-handler";
import User from '../models/userModel.js'




//register new user
const registerUser =asyncHandler(async (req,res) =>  {

    const {email , password ,name} = req.body
    
    const userExist = await User.findOne({email: email})
    if(userExist) { 
        res.status(400)
        throw new Error("user exists")
    }
    const user = await User.create({
      email,
      password,
      name

    })
    
    
    if(user) {
        res.status(201).json ({
            _id: user._id , 
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)

        }) 
    }else { 
        res.status(400)
        throw new Error ('invalid email or password')
    
    }
})




///get ALL USERS 
// GET/API/USERS
//ADMIN SCREEN

const getUsers =asyncHandler(async (req,res) =>  {
    
    const users = await User.find()
    
        res.json(users)
    
    })




//login user and get token

const loginUser =asyncHandler(async (req,res) =>  {

    const {email , password} = req.body
    
    const user = await User.findOne({email: email})
        if(user && await (user.matchPassword(password))) { 
    
    res.json({
        _id: user._id , 
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)
    
    })
    
    
        }else { 
            res.status(401)
            throw new Error ('invalid email or password')
        }
    
    
    })
    
    







    export {registerUser, getUsers , loginUser}