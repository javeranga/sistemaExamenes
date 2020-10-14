const mongoose = require('mongoose')
const config = require('./config')
const mongoURL = config.mongoDB
//const mongoURL = 'mongodb://127.0.0.1:27017/'

/*Conexion a la BD ----> URL donde se incluye el nombre de la base de datos , opciones, callback de error por si falla la conexion*/
const conectar = () => {
    mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true},(error,res)=>{
        if(error){
            console.log("Error de conexión")
        } else {
            console.log("Conexión completada")
        }
    })
}

module.exports = {conectar}