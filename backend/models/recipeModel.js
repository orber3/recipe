import mongoose from "mongoose";

// ddddd

const recipeSchema = mongoose.Schema({


  
//   user: { 
//     type: mongoose.Schema.Types.ObjectId , 
//     required: true,
//     ref: 'User'
// },

  name: {
    type: String,
    required: true,
  },
  user: 
   {
     type: Array , 
     required: true,
  // googleId: {type: String , required: true },
  // imageUrl: {type: String , required: true },
  // email: {type: String , required: true },
  // name: {type: String , required: true },
  // givenName: {type: String , required: true },
  // familyName: {type: String , required: true },
   },

  cookingTime: {
    type: Number,
  },

  catagory: {
    type: String,
  },

  description: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    default: 0,
  },

  numReviews: {
    type: Number,
    default: 0,
  },
  date: {
      type: String ,
      required: true,
  },

  ingredients: {
    type: String,
    required: true,
  },
  image: { 
      type: String,
      required: true,
  },

  directions: [],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
