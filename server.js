import express from "express"
import cors from "cors"
import "dotenv/config"

const app=express()
app.use(cors())
app.use(express.json())

app.get("/health",(req,res)=>{
    res.status(200).json({message:"server running successfully"})
})
app.listen("0.0.0.0",()=>{
    console.log(`server successfully running`);
})
