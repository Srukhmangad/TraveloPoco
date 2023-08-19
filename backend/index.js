const express = require('express')
require('dotenv').config()

const app =express()
app.use(express.json())

PORT=process.env.PORT
const conn = require('./conn')

app.get('/hello',(req,res)=>(res.send('Hello World')))

app.listen(PORT, ()=>(
    console.log(`Server started at http//localhost:${PORT}`)
))