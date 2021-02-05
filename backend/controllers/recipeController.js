
import Recipe from '../models/recipeModel.js'
import asyncHandler from 'express-async-handler'

const createRecipe =asyncHandler(async (req,res) =>  {

    const {name , cookingTime , catagory , description  , ingredients , directions} = req.body   
        const recipe = new Recipe({ 
            name , cookingTime , catagory , description ,ingredients , directions 
        })
    
        const createdRecipe = await recipe.save()
        res.status(201).json(createdRecipe)
    })
    
//get all recipes 

    const getRecipes =asyncHandler(async (req,res) =>  {

    
            const recipe = await Recipe.find()
        
                res.json(recipe)
            
            })
        
    
    

export { createRecipe , getRecipes}