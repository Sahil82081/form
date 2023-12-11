const express = require('express')
require('./connection/conn')
const user = require('./Schema/schema')
const path = require('path')
const app = express()
const PORT = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const staticpath = path.join(__dirname, "../public")
app.use(express.static(staticpath))

app.post('/', async (req, res) => {
    try {
        
        const info = {
            name: req.body.name,
            password: req.body.password,
            phone: req.body.phone,
            email: req.body.email,
            date: req.body.date,
            gender: req.body.gender,
        }

        const registered = await user(info).save()
        console.log("Succesfully Saved")
    }
    catch (error) {
        console.log('Error')
        res.send(error)
    } 
})

app.listen(PORT, () => {
    console.log("Server was started at 8000")
})