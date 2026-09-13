import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectToDb from './config/connectDb.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRouter from './routes/auth.route.js'

const app = express()
const PORT= process.env.PORT || 6000

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)

app.get('/',(req,res)=>{
    return res.json({message:"Server Started"})
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
     connectToDb()
})