const express = require("express");
require("dotenv").config({ path: './config/.env' })
const connectDB = require("./config/connectDB");
const user = require("./model/User");
const app = express();
const PORT = process.env.PORT;


app.use(express.json());

connectDB();


app.listen(PORT,console.log('app is runnig '))