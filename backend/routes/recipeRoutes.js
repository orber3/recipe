import express from 'express'
const router = express.Router()
import {createRecipe} from '../controllers/recipeController.js'


router.route('/postRecipe')
.post(createRecipe)

export default router