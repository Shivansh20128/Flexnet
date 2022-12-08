var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://Shivansh:iamalulu@cluster0.aajgtcd.mongodb.net/flexnet_database',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/lets_go",(req,res)=>{
    // var name = req.body.name;
    var email = req.body.email;
    // var phno = req.body.phno;
    // var password = req.body.password;

    var data = {
        // "name": name,
        "email" : email,
        // "phno": phno,
        // "password" : password
    }

    db.collection('data_entries').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('browse.html')

})


app.get("/",(req,res)=>{
    // res.set({
    //     "Allow-access-Allow-Origin": '*'
    // })
    return res.redirect('/public/index.html');
    // res.sendFile(__dirname + "/index.html");
}).listen(3000);


console.log("Listening on PORT 3000");