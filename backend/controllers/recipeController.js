import Recipe from "../models/recipeModel.js";
import asyncHandler from "express-async-handler";
import bodyParser from 'body-parser'

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
  
const user = req.body.userId
  const recipe = new Recipe({
    name,
    cookingTime,
    catagory,
    description,
    ingredients,
    directions,
    user,
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
  const recipe = await Recipe.find();

  res.json(recipe);
});

// update recipe
//put
const updateRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  if (recipe && recipe.user[0].email == req.body.user.email) {
    recipe.name = req.body.name || recipe.name;
    recipe.cookingTime = req.body.cookingTime || recipe.cookingTime;
    recipe.catagory = req.body.catagory || recipe.catagory;
    recipe.ingredients = req.body.ingredients || recipe.ingredients;
    recipe.directions = req.body.directions || recipe.directions;
    recipe.image = req.body.image || recipe.image;

    const updatedRecipe = await recipe.save();

    res.json(updatedRecipe);
  } else {
    res.status(404);
    throw new Error("recipe not found");
  }
});

// DELETE RECIPE
const deleteRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if  (recipe && recipe.user[0].email == req.body.user.email) {
    await recipe.remove();
    res.json({ message: "recipe removed" });
  } else {
    res.status(404);
    throw new Error("recipe not found");
  }
});




//  get logged in user recipes


const getMyRecipes =asyncHandler(async (req,res) =>  {
//   console.log(req.query._id)
const user = req.query.user
console.log(user)
if(user) { 

   const recipes = await Recipe.find( { 'user.0.email': user} )
  
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
  









export { createRecipe, getRecipes, updateRecipe, deleteRecipe ,getMyRecipes, getRecipeById};



