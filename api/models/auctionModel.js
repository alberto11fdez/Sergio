var mongoose = require('mongoose');


const AuctionSchema =new mongoose.Schema({
    
    Producto:String,
    cantidad:String,
    Propietario:String,
    tiempo_inicio:String,
    tiempo_final:String,
  },{'collection':'Auction'});
  
  const AuctionModel = mongoose.model('Auction',AuctionSchema);
  
  module.exports=AuctionModel;