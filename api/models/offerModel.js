var mongoose = require('mongoose');


const offerSchema =new mongoose.Schema({
    
    Producto:String,
    cantidad:String,
    Propietario:String,
  },{'collection':'offers'});
  
  const offerModel = mongoose.model('offers',offerSchema);
  
  module.exports=offerModel;