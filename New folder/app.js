let express = require('express');
let app = express();
//dotenv setup
let dotenv = require('dotenv')
//morgan
let morgan = require('morgan')
//
dotenv.config()
let port = process.env.PORT || 2600;

app.use(morgan('short'))

app.get('/',(req,res)=>{
    res.send(`hello the express app is running on port no ${port}`)
})

app.get('/data',(req,res)=>{
    res.send('hello this is data')
})

app.listen(port,(req,res)=>{
    console.log(`listing to the port no ${port}`)
})