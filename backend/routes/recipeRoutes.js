import express from 'express'
const router = express.Router()
import {createRecipe,getRecipes , updateRecipe , deleteRecipe,getMyRecipes, getRecipeById} from '../controllers/recipeController.js'


router.route('/r')
.post(createRecipe)
.get(getRecipes)

router.route('/my').get(getMyRecipes)

router.route('/:id')
.get(getRecipeById)
.delete(deleteRecipe)
.put(updateRecipe)



export default router