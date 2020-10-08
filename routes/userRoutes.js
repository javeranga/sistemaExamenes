/*
    POST: Para insertar datos y enviar datos sensibles
    GET: Obtener datos
    PUT: Modificar datos
    DELETE: Eliminar datos
*/
module.exports = (app) => {
    const User = require('../controllers/UserController')
    app.get('/usuario/getAll',User.getAll)
    app.get('/usuario/getOne/:id',User.getOne)
    app.post('/usuario/new',User.create)
    app.put('/usuario/edit/:id',User.update)
    app.delete('/usuario/delete/:id',User.delete)
}




/*exportamos la ruta para que este disponible a quien requiera*/
//module.exports = api