import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import groupRoutes from './routes/groups.js'

const app = express()
dotenv.config()

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "20mb", extended: true}))
app.use(cors())

// always initialize app.use routes after initializing cors()
app.use('/groups', groupRoutes)

const PORT = process.env.PORT || 5000;

// connecting to mongoDB
mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, ()=> 
    console.log(`Connection is established and running on port: ${PORT}`)
)).catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)



