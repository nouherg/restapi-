const mongoose = require("mongoose");

const connectDB = async ()=> {
try {
    await mongoose.connect("mongodb+srv://nouhe:nouhenouhe123@cluster0.y8tihim.mongodb.net/test")
    console.log("db is connected")
} catch (error) {
    console.log(error)
}

}
module.exports = connectDB;