var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
const uri = "mongodb+srv://admin:hTVNa7w7kjJZdg@cluster0.3wkekj7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
.then(()=>{
    console.log("Conectado a mongodb con mongoose");
})
.catch((error)=>{
    console.log("Error al conectar a mongodb");
});

const CommentSchema =new mongoose.Schema({
    id_post:String,
    name:String,
    surname:String,
    email:String,
    Password:String,
},{'collection':'Comentarios'});

const Comment = mongoose.model('SUB-MAS',CommentSchema,'Users');

router.get("/", async (req,res)=>{
    try{
        const comments = await Comment.find({'id_post':req.query.id_post});
        if(comments){
            res.send(comments);
        }
        else{
            res.send({});
        }
    }catch(error){
        console.log(error);
        res.status(400).json({error:error.message});
    }
})

router.post("/", async(req,res)=>{
    try{
        const new_comment= new Comment(req.body);
        const savedComment = await new_comment.save();
        res.status(201).send(savedComment);
    }catch(error){
        console.log(error);
        res.status(400).json({error:error.message}); 
    }
});

module.exports=router;