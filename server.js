const express = require("express");
require("dotenv").config({ path: './config/.env' })
const connectDB = require("./config/connectDB");
const user = require("./model/User");
const app = express();
const PORT = process.env.PORT;
const userRoutes = require("./route/user");

app.use(express.json());

app.use("/api/users", userRoutes);
connectDB();


app.listen(PORT,console.log('app is runnig '))