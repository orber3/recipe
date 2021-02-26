import asyncHandler from "express-async-handler";
import User from "../models/userModel.js"

const login = asyncHandler(async (req, res) => {
 

      const email = req.body.user.email
      const name = req.body.user.name
      const googleId = req.body.user.googleId



 let user = await User.findOne({ email}).exec()

if(user) { 
    res.json(user)
}

else {
   
    let user = new User ({
        email , name , googleId

})

const createdUser = await user.save();


if(createdUser) { 
    res.status(201).json(createdUser);
    }
      else { 
          res.status(400)
          throw new Error ('check your form - something is missing.')
      }
    }



}) 



const getUsers = asyncHandler(async (req, res) => {
    const user = await User.find();
  
    res.json(user);
  });




export { login , getUsers};
