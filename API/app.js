//Express App Declearation
let express = require('express');
let app = express();

/// for reading value form .env 
let dotenv = require('dotenv');
dotenv.config()

// for logging purposes And Required Packeges
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

// list of gender
app.get('/gender',(req,res) => {
    let query = {}
    let genderid = Number(req.query.genderid)
    if(genderid){
        query = {gender_id:genderid}
    }
    db.collection('gender').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//list id product type with respect to gender
app.get('/producttype',(req,res) => {
    let query = {}
    let genderid =Number(req.query.genderid)
    if(genderid){
        query = {gender_id:genderid}
    }
    db.collection('product_type').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//list id product with respect to gender
app.get('/product',(req,res) => {
    let query = {}
    let genderid = Number(req.query.genderid)
    if(genderid){
        query = {gender_id:genderid}
    }  
    db.collection('product').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//product for gender with product type
app.get('/product/:genderid/',(req,res) => {
    let query = {}
    let genderid = Number(req.params.genderid)
    let producttypeid = Number(req.query.producttypeid)
    if(producttypeid){
        query = {gender_id:genderid,
           product_type_id: producttypeid}
    }  
    db.collection('product').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//product details with respect to product id
app.get('/product/detail/:productid',(req,res)=>{
    let query = {}
    let productid = Number(req.params.productid)
    if(productid){
        query = {product_id:productid}
    }
    db.collection('product').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//get orders
app.get('/getorder',(req,res) => {
    
    db.collection('orders').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//placeorders
app.post('/placeOrder',(req,res) => {
    console.log(req.body);
    db.collection('orders').insert(req.body,(err,result) => {
        if(err) throw err;
        res.send('Order Placed')
        
    })
})
//Update Order
app.put('/updateOrder/:id',(req,res) => {
    let oid = Number(req.params.id);
    db.collection('orders').updateOne(
        {orderId:oid},
        {
            $set:{
                "status":req.body.status,
                "bank_name":req.body.bank_name,
                "date":req.body.date
            }
        },(err,result) => {
            if(err) throw err;
            res.send('Order Updated')
        }
    )
})
//delet orders
app.delete('/deleteOrder/:id',(req,res) => {
    let _id = mongo.ObjectId(req.params.id);
    db.collection('orders').deleteOne({_id},(err,result) => {
        if(err) throw err;
        res.send('Order Deleted')
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
