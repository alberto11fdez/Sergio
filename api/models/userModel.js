var mongoose = require('mongoose');


const UsersSchema =new mongoose.Schema({
    
    nombre:String,
    apellidos:String,
    correo:String,
    contraseña:String,
  },{'collection':'Users'});
  
  const userModel = mongoose.model('Users',UsersSchema);
  
  module.exports=userModel;