import express from 'express'
const router = express.Router()
import {createRecipe,getRecipes} from '../controllers/recipeController.js'


router.route('/postRecipe')
.post(createRecipe)
.get(getRecipes)

export default router