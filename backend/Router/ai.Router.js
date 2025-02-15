const express=require("express")
const { getprompt } = require("../Controller/ai.Controller")
const app=express.Router()

app.post("/getPrompt",getprompt)

module.exports=app