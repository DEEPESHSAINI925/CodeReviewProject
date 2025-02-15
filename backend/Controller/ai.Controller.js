const gernerateAi = require("../services/ai.service");

module.exports.getprompt=async (req,res)=>{
    const {prompt}=req.body;
    if(!prompt){
        return res.status(400).json({
            message:false,
            error:"prompt is missing"
        })
    }
    const response=await gernerateAi(prompt)
    if(!response){
         res.status(401).json({
            message:false,
            error:"response is not generate "
        })
    }
     res.status(201).json({
        message:true,
        data:response
    })
 
}