const express = require ('express');

const app = express();

/**
 * Home server -->
 */
app.get('/', (req, res) => {

    let objeto = {
        mensaje: "Bienvenidos al REST server - 5APROGV Equipo 09"
    };
    res.send(objeto);
    });

module.exports =app;