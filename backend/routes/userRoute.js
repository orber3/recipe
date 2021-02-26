import express from 'express'
const router = express.Router()
import {login,getUsers} from '../controllers/userController.js'
import passport from "passport"
import GoogleStrategy  from "passport-google-oauth20"


// import { OAuth2Client } from 'google-auth-library'
// const client = new OAuth2Client('804267482082-d6nsm6snr43b6v7be897fdii1pht6uc6.apps.googleusercontent.com')

// server.post("/api/auth/google", async (req, res) => {
//     const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: 804267482082-d6nsm6snr43b6v7be897fdii1pht6uc6.apps.googleusercontent.com
//     });
//     const { name, email, picture } = ticket.getPayload();    
//     const user = await db.user.upsert({ 
//         where: { email: email },
//         update: { name, picture },
//         create: { name, email, picture }
//     })
//     res.status(201)
//     res.json(user)
// })


//After authorization,Google will redirect the user back to home page of application

// router.get('/auth/google',
// passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// //if authentication fails the user will be redirected to login page.
// //otherwise user will redirect to home page

// router.get('/auth/google/callback',
//         passport.authenticate('google',{
//             failureRedirect:'/login',
//         }
//     ),function(req,res){
//         res.redirect('/');
//     });
    

router.route('/')
.post(login)
.get(getUsers)






    export default router


