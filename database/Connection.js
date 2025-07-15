const mongoose = require("mongoose")
require('dotenv').config();

async function connectDB(){
    console.log("Start")
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Done")
}

module.exports={connectDB}