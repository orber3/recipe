import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import recipeRoutes from './routes/recipeRoutes.js'
import morgan from 'morgan'

//env config
dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()
//connects to DB
connectDB()


app.listen(PORT,  console.log(  `${process.env.NODE_ENV} mode and port ${process.env.PORT}`))

app.use(express.json())

if(process.env.NODE_ENV === 'development') { 
    app.use(morgan('dev'))
}

//routes

    app.use('/api/recipe', recipeRoutes)
