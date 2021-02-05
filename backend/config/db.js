import mongoose from  'mongoose'
import dotenv from 'dotenv'

const connectDB =async () => { 

    try{ 
        const con = await mongoose.connect(process.env.MONGO_URI, { 
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            
            useCreateIndex: true
        })
        console.log(`mongo db created   ${con.connection.host}`)

    }catch(e) { 
        console.error( `Error: ${e.message}`)
        process.exit(1)

    }
}


export default connectDB;