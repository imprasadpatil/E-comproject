let express = require('express');
let app = express();
/// for reading value form .env 
let dotenv = require('dotenv');
dotenv.config()
// for logging purposes
let morgan = require('morgan');
let fs = require('fs');
let port = process.env.PORT || 2600;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = process.env.mongocloud;
let bodyParser = require('body-parser')
let db;


// middleware
app.use(morgan('short',{stream:fs.createWriteStream('./app.logs')}))
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.send('Express App Is Running')
})

// list of city
app.get('/product',(req,res) => {
    let query = {};
    let genderId = Number(req.query.genderId);
    if(genderId){
        query={gender_id:genderId}
    }
    db.collection('product').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//connection with mongo
MongoClient.connect(mongoUrl,(err,client)=>{
    if(err) console.log(`Error while connecting`);
    db = client.db('ecomm')
    app.listen(port,() => {
        console.log(`App is running on port - ${port}`)
    })
})
