
import Recipe from '../models/recipeModel.js'
import asyncHandler from 'express-async-handler'


// const createRecipe = asyncHandler(async (req,res) =>  {
//     const recipe = new Recipe({
//         name: 'sample',
//         // user: req.user._id,
//         // image: '/images/sample.jpg',
//         cookingTime: 20,
//         catagory: 'sam cat',
//         ingredients: 'carrot',
//         numReview: 0,
//         description: 'sample desc',
//         directions: 'step 1:  o',

//     })

//     const createdRecipe = await recipe.save()
//     res.status(201).json(createdRecipe)

// })



const createRecipe =asyncHandler(async (req,res) =>  {

    const {name , cookingTime , catagory , description  , ingredients , directions} = req.body   

        const recipe = new Recipe({ 
         
            name , cookingTime , catagory , description ,ingredients , directions 
        })
    
        const createdRecipe = await recipe.save()
        res.status(201).json(createdRecipe)
    
    })
    
    
    

export { createRecipe}