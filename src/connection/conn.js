// const mongoose = require("mongoose")
// const connect = mongoose.connect("mongodb://localhost:27017")

// connect.then(() => {
//     console.log("Connected To a Database")
// }).catch((e) => {
//     console("Conncction Error" + e)
// })

const mongoose = require("mongoose")

const connect = mongoose.connect("mongodb+srv://sahilkumbharkar:FkHW1KkzxiNewNPH@sahil.wc1irsj.mongodb.net/?retryWrites=true&w=majority")

connect.then(() => {
    console.log("Connected To a Database")
}).catch((e) => {
    console.log("Conncction Error : " + e)
})
