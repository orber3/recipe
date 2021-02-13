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
    user,
    date,
    image,
  } = req.body;

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

  if (recipe) {
    recipe.name = req.body.name || recipe.name;
    recipe.cookingTime = req.body.cookingTime || recipe.cookingTime;
    recipe.catagory = req.body.catagory || recipe.catagory;
    recipe.ingredients = req.body.ingredients || recipe.ingredients;
    recipe.directions = req.body.directions || recipe.directions;

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
  if (recipe) {
    await recipe.remove();
    res.json({ message: "recipe removed" });
  } else {
    res.status(404);
    throw new Error("recipe not found");
  }
});

export { createRecipe, getRecipes, updateRecipe, deleteRecipe };
