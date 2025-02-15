const dotenv=require("dotenv")
dotenv.config
const express=require("express")
const app=express()
const DB=require("./DB/database")
const aiRouter=require("./Router/ai.Router")
const cors =require("cors")
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use("/ai",aiRouter);

app.listen(3001,()=>{
    console.log(`server running on 3001`)
})