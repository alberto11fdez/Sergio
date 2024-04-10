var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
const uri = "mongodb+srv://admin:hTVNa7w7kjJZdg@cluster0.3wkekj7.mongodb.net/SUB-MAS";

mongoose.connect(uri)
.then(()=>{
    console.log("Conectado a mongodb con mongoose");
})
.catch((error)=>{
    console.log("Error al conectar a mongodb");
});


module.exports=router;