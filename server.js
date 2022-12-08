const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://Shivansh:iamalulu@cluster0.aajgtcd.mongodb.net/flexnet_database",{useNewUrlParser:true},{useUnifiedTopology:true})

const notesSchema = {
    email:String
}

const Note = mongoose.model("Note",notesSchema);

app.get("/",function(req,res){
    
    res.sendFile(__dirname + "/index.html");
    // res.sendFile(__dirname + "/browse.html");
})

app.post("/",function(req,res){
    let newNote = new Note({
        email : req.body.email
    }) 
    newNote.save();
    res.redirect('/');
})
app.listen(3000,function() {
    console.log("Server is running on 3000");
})