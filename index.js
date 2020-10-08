const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {conectar} = require('./connect')
const routes = require('./routes/userRoutes')

/* en esta constante se almacena la conexion a express*/
const app = express()
/*conectarse mediante el middleware*/
app.use(cors())
/*usar un metodo llamado use para convertir lo que se a JSON*/
app.use(bodyParser.json())
/*conectarse al mongo*/
conectar()

/*conectarse a las rutas del usuario y enviarle el express en el app*/
require('./routes/userRoutes')(app)


/*conectarse al puerto*/
app.listen(3000,()=>{
    console.log('Conexión exitosa')
})


/* Enlzarse a una ruta */
//app.use('/api',routes)

/*exportar la app para quien lo requiera*/
//module.exports = app