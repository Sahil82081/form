const mongoose = require("mongoose")
const connect = mongoose.connect("mongodb://localhost:27017")

connect.then(() => {
    console.log("Connected To a Database")
}).catch((e) => {
    console("Conncction Error" + e)
})