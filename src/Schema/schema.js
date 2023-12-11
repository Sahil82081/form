const mongoose = require('mongoose')


const schema = {
    name: String,
    password: String,
    phone: Number,
    email: String,
    date: Number,
    gender: String,
}


const user = mongoose.model("userinfo", schema)

module.exports = user;
