import express from 'express'
const router = express.Router()
import {createRecipe,getRecipes , updateRecipe , deleteRecipe,getMyRecipes, getRecipeById, createRecipeReview} from '../controllers/recipeController.js'
import {protect, admin} from '../middleware/auth.js'


router.route('/r')
.post(protect, createRecipe)
.get(getRecipes)

router.route('/my').get( protect, getMyRecipes)


//reviews
router.route('/review/:id')
.post(protect,createRecipeReview)


router.route('/:id')
.get(getRecipeById)
.delete(protect, deleteRecipe)
.put(protect,updateRecipe)



export default router