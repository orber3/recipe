import express from 'express'
const router = express.Router()
import {createRecipe,getRecipes , updateRecipe , deleteRecipe} from '../controllers/recipeController.js'


router.route('/r')
.post(createRecipe)
.get(getRecipes)


router.route('/:id')
.delete(deleteRecipe)
.put(updateRecipe)

export default router