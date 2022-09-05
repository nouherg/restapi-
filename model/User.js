const mongoose = require("mongoose");


const user = new mongoose.Schema({
    Name: String,
    email: String
})
module.exports = mongoose.model('user', user);