import mongoose from 'mongoose'

// ddddd

const recipeSchema = mongoose.Schema({




name: { 
    type: String,
    required: true

},

cookingTime: { 
    type: Number,

},

catagory: { 
    type: String,
} ,

description: { 
    type: String,
    required: true,
} ,

rating: { 
    type: Number,
    default: 0
} ,

numReviews: { 
    type: Number,
    default: 0

} ,

ingredients: { 
    type: String,
    required: true,

} ,

directions: { 
    step1: { type: String },
    step2: { type: String },
    step3: { type: String },
    step4: { type: String },


},

})


const Recipe  = mongoose.model('Recipe' , recipeSchema)

export default Recipe