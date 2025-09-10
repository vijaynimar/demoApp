import express from "express"
import cors from "cors"
import "dotenv/config"
const PORT=process.env.PORT
const app=express()
app.use(cors())
app.use(express.json())

app.get("/health",(req,res)=>{
    res.status(200).json({message:"server running successfully"})
})

app.listen(PORT,()=>{
    console.log("server successfully running on port 2000");
})