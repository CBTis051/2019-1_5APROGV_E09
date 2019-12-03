require('./config/config');

const express = require('express');

const app = express();

const mysql = require('mysql2');
const jwt = require ('jsonwebtoken');


/**
 * Home server -->
 */
app.get('/', (req, res) => {

let objeto = {
    mensaje: "Bienvenidos al REST server - 5APROGV Equipo 09"
};
res.send(objeto);
});

app.listen(process.env.PORT, () => {
    console.log("Server running on port ", process.env.PORT);
});

const bodyParser = require('body-parser');

//parse aplication/x-www-urlencoded
app.use(bodyParser.urlencoded({ exended: false}))

//parse aplication/json
app.use(bodyParser.json())

//Configuracion global de rutas
app.use(require('./routes/index'));

/**
 * Home del server
 */
app.get('/', (req, res) => {

    
})