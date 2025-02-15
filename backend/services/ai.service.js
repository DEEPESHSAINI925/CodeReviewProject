const dotenv = require("dotenv")
dotenv.config()
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
    systemInstruction:`
    you are an code reviewer, who have an experties in developments. you lokk for the code and find the problem and suggest the solution to the developer.


    you always try to find the best soltuion for the developer and also try to make the code more efficiently and clean. 
    
    ` 

});

async function generateAI(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text()
}

module.exports = generateAI