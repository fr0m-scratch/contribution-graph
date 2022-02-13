const express = require('express')
const dotenv = require('dotenv').config()
const getData = require('./services/notion')

const app = express()


app.use(express.static('public'))

app.get('/data', async(req,res)=>{
    const Data = await getData()
    res.json(Data)
})

app.listen(process.env.PORT, console.log('server started'))