import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import recipeRoutes from './routes/recipeRoutes.js'
import uploadRoute from './routes/uploadRoute.js'
import userRoute from './routes/userRoute.js'
import morgan from 'morgan'
import path from 'path'
import bodyParser from 'body-parser'
import {notFound, errorHandler} from './middleware/error.js'


//env config
dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()
//connects to DB
connectDB()


app.use(bodyParser.json());



app.listen(PORT,  console.log(  `${process.env.NODE_ENV} mode and port ${process.env.PORT}`))

app.use(express.json())

if(process.env.NODE_ENV === 'development') { 
    app.use(morgan('dev'))
}

//routes

    app.use('/api/recipe', recipeRoutes)
    app.use('/api/uploads', uploadRoute)

    //upload route
    const __dirname = path.resolve()

    app.use('/api/uploads', express.static(path.join(__dirname , '/uploads')))


    //  user routes

    app.use('/api/users', userRoute)

 
//error handlers

    app.use(notFound)
     app.use(errorHandler)
    
    