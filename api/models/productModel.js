var mongoose = require('mongoose');


const ProductsSchema =new mongoose.Schema({
    
    nombre:String,
    detalles:String,
    imagen:String,
    estado:String,
    Propietario:String,
  },{'collection':'Products'});
  
  const productModel = mongoose.model('Products',ProductsSchema);
  
  module.exports=productModel;