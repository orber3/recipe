import mongoose from 'mongoose'

const userSchema = mongoose.Schema({

name: { 
    type: String,
    required: true

},

email: { 
    type: String,
    required: true,
    unique: true

},

googleId: { 
    type: String,
    required: true

},

token: {
    type: String,
    required: false
}

    
})
const User = mongoose.model('User' , userSchema)

export default User