import mongoose from "mongoose";



const reviewSchema = mongoose.Schema( { 
  name:{ type: String, required: true},
  rating:{ type: Number, required: true},
  comment:{ type: String, required: true},
  
  user: { 
      type: mongoose.Schema.Types.ObjectId , 
      required: true,
      ref: 'User'
  
  } , 
  },
  { 
      timestamps: true,
  
  })




const recipeSchema = mongoose.Schema({


  

  name: {
    type: String,
    required: true,
  },
 
user: { 
  type: mongoose.Schema.Types.ObjectId,
  required: true,
  ref: 'User',
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


  reviews:[reviewSchema],


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
