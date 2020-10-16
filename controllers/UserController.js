/*cargar el modelo*/
const User = require('../models/User')

//ENCRIPTACION
// cargar la libreria para criptografiar
const crypto = require('crypto')
const bcrypt = require('bcryptjs')

const key = 'llavesecretaSistemaExamenes'
const iv = 'vectorparaEmcriptacion'

let encrypt = (password) => {
    let chiper = crypto.createCipheriv('aes-256-cbc',key,iv)
    let pass = chiper.update(password,'utf8','hex')
    pass += chiper.final('hex')
    return pass
}
//fin ENCRIPTACION

/*Creamos funciones*/
exports.create = (req, res) => {
    /*en user almacenamos la estructura del Usuario*/
    var user = new User()
    /* body hace referencia al contenido que recibe del frontened*/
    var params = req.body
    /* en user.algo guarde lo que obtuvo del frontened*/
    user.firstName = params.firstName
    user.lastName = params.lastName
    user.userName=params.userName
    user.password = params.password    
    user.email = params.email
    user.faculty=params.faculty
    user.role=params.role
    /*metodo de mongoose para insertar datos*/
    user.save((error, userCreated) =>{
        if(error){
            /*Error en el servidor*/
            res.status(500).send({
                statusCode:500,
                message:"Error en el servidor"
            })
        }else{
            /*si no se guardo nada*/
            if(!userCreated){
                res.status(400).send({
                    statusCode:400,
                    message:"No se ha ingresado un usuario"
                })
            /*si todo salió bien*/
            } else {
                res.status(200).send({
                    statusCode:200,
                    message:"Usuario almacenado correctamente",
                    dataUser: userCreated
                })
            }
        }
    })
}


exports.getAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users)
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Error al obtener usuarios'
            })
        })
}

exports.getOne = (req,res) => {
    User.findById(req.params.id)
    .then(users => {
        res.send(users)
    })
    .catch(error => {
        res.status(500).send({
            message: error.message || 'Error al obtener el usuario'
        })
    })
}

exports.update = (req,res) => {
    if(!req.body) {
        return res.status(400).send({
            statusCode:400,
            message:"Todos los campos son obligatorios"
        })
    }
    //almacena en una variable los datos del frontend
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        faculty: req.body.faculty,
        role: req.body.role
    } 
    //busca en la base de datos y actualiza
    User.findByIdAndUpdate(req.params.id, user,{new:true})
    .then(
        user => {
            res.send(user)
        }
    ).catch(error=>{
        res.status(500).send({
            message: error.message || 'Error al editar usuario'
        })
    })
}

exports.delete = (req,res) => {
    User.findByIdAndRemove(req.params.id)
    .then(
        user => {
            res.send(user)
        }
    )
    .catch(
        error => {
            res.status(500).send({
                message:error.message
            })
        }
    )
}

/*exportar la funcion create*/
/* module.exports = {
    create
} */