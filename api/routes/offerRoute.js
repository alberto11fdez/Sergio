var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var offer = require('../models/offerModel');

/* GET users listing. */


router.get("/", async (req,res)=>{
  try{
      const comments = await offer.find();
      res.send(comments);

     
   
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
module.exports = router;
