const mongoose = require('mongoose')
const mongoURL = 'mongodb://admin:orbgcjV6yW5uNIKf@sistemaExamenesDB-shard-00-00.mapq5.mongodb.net:27017,sistemaExamenesDB-shard-00-01.mapq5.mongodb.net:27017,sistemaExamenesDB-shard-00-02.mapq5.mongodb.net:27017/sistemaExamenesDB?ssl=true&replicaSet=atlas-s2fb91-shard-0&authSource=admin&retryWrites=true&w=majority'
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