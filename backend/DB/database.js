const dotenv=require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const Db = mongoose.connect(process.env.MOGOURI).then(() => {
    console.log("database connected");
})
.catch((err) => {
    console.error(err);
 })
 module.exports=Db