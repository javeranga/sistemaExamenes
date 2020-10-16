const mongoose = require('mongoose')
/*Codigo para que la funcion findOneandUpdate no este deprecada*/
mongoose.set('useFindAndModify', false)
mongoose.Promise = global.Promise

/* se almacena en una variable llamada UserSchema la estructura de nuestros Usuario*/
const UserSchema = new mongoose.Schema({
    firstName: {type:String,required:true},
    lastName: {type:String,required:true},
    userName: {type:String,required:true},
    password: {type:String,required:true},
    email: {type:String,required:true},
    faculty: {type:String,required:true},
    role: {type:Number,required:true}
})
/* mongoose.model() compila el json del modelo y lo convierte en modelo de mongoose*/
module.exports = mongoose.model('users',UserSchema)


/*Para relacionar dos modelos

algo: { type: mongoose.Schema.Types.ObjectId, ref:'OtroModelo'}*/