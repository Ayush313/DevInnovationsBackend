const express = require('express');
const app = express();
const cors = require('cors');
const { route } = require("./Routes/Routes");
const { getNotes } = require('./Controller/User');
const { connectDB } = require('./database/connection');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use("/",route)

app.listen(5000, () => {
    console.log('Server Starting')
    connectDB()
    console.log("Server Running")
    // getNotes()
})

