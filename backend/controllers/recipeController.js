import Recipe from "../models/recipeModel.js";
import asyncHandler from "express-async-handler";

const createRecipe = asyncHandler(async (req, res) => {
  const {
    name,
    cookingTime,
    catagory,
    description,
    ingredients,
    directions,
   
    date,
    image,
  } = req.body;
  
console.log(req.user._id)
  const recipe = new Recipe({
    name,
    cookingTime,
    catagory,
    description,
    ingredients,
    directions,
    user: req.user._id,
    date,
    image,
  });

  const createdRecipe = await recipe.save();
  if(createdRecipe) { 
  res.status(201).json(createdRecipe);
  }
    else { 
        res.status(400)
        throw new Error ('check your form - something is missing.')
    }

  
});

//get all recipes

const getRecipes = asyncHandler(async (req, res) => {
  const recipe = await Recipe.find().populate('user' , 'id name', );

  res.json(recipe);
});

// update recipe
//put
const updateRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);


  if (recipe) {
    recipe.name = req.body.name || recipe.name;
    recipe.cookingTime = req.body.cookingTime || recipe.cookingTime;
    recipe.catagory = req.body.catagory || recipe.catagory;
    recipe.ingredients = req.body.ingredients || recipe.ingredients;
    recipe.directions = req.body.directions || recipe.directions;
    recipe.image = req.body.image || recipe.image;
    recipe.description = req.body.description || recipe.description;

    const updatedRecipe = await recipe.save();
console.log(updatedRecipe)

    res.json(updatedRecipe);
  } else {
    res.status(404);
    throw new Error("recipe not found");
  }
});

// DELETE RECIPE
const deleteRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  // if  (recipe && recipe.user[0].email == req.body.user.email) {
    await recipe.remove();
    res.json({ message: "recipe removed" });
  // } else {
  //   res.status(404);
  //   throw new Error("recipe not found");
  // }
});




//  get logged in user recipes


const getMyRecipes =asyncHandler(async (req,res) =>  {
//   console.log(req.query._id)
// const user = req.query.user
console.log(req.user._id)

if(req.user._id) { 

   const recipes = await Recipe.find( { user: req.user._id
  } ).populate('user' , 'id name', )
  
    if(recipes.length < 1) { 
      res.status(404);
      throw new Error("recipe not found");
    
    }
  
    else  {
      console.log(recipes)
      res.json(recipes)
    } }
        })


//get recipe by id
        const getRecipeById =asyncHandler(async (req,res) =>  {
          const recipe= await Recipe.findById(req.params.id)
              if(!recipe) { 
                  res.status(404).json({message: "not found "})
              }
              res.json(recipe)
  
      
  })
  

//create new review
// post//api/recipe/:id/reviews

const createRecipeReview2 = asyncHandler(async (req,res) =>  {
  const { rating , comment}  =req.body
  console.log(comment)
  res.status(201).json({message: rating})

})

const createRecipeReview = asyncHandler(async (req,res) =>  {
  const { rating , comment}=req.body
  console.log(req.body)

  const recipe = await Recipe.findById(req.params.id)

  if(recipe) { 
      const alreadyReviewd = recipe.reviews.find( r=> r.user.toString() == req.user._id.toString())
      if(alreadyReviewd) { 
          res.status(401)
          throw new Error('recipe already reviewd by this user')

      }
      const review = { 
          name: req.user.name,
          rating: Number(rating),
          comment,
          user: req.user._id
      }
      recipe.reviews.push(review)
      console.log(recipe.reviews.length)

      recipe.numReviews = recipe.reviews.length
      console.log(recipe.numReviews)

      recipe.rating =
    recipe.reviews.reduce((acc, item) => item.rating + acc, 0) /
    recipe.reviews.length

console.log(recipe)
      await recipe.save()
      res.status(201).json({message: 'review added'})

  } else { 

      res.status(404) 
      throw new Error('recipe not found')

  }
})








export { createRecipe, getRecipes, updateRecipe, deleteRecipe ,getMyRecipes, getRecipeById, createRecipeReview };



