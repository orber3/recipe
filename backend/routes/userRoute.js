import express from 'express'
const router = express.Router()
import { loginUser, registerUser,getUsers } from '../controllers/userController.js'
import {protect, admin} from '../middleware/auth.js'


router.route('/register').post(registerUser).get(protect)


router.post('/login', loginUser)

router.get('/getAllUsers' , protect,getUsers)

export default router