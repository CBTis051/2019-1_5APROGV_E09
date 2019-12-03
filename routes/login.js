const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

const Usuario = require('../models/usuario');

/**
 * Login de server --> /login
 */

 app.post('/login', (req, res) => {


    //Obtenemos las credenciales
    let body = req.body;

    //Se manda un log con los datos que se recibieron
    console.log(body);

    //Se busca usuario
    Usuario.findOne(
        {
            where: {
                usuario: body.usuario,
                password: body.contra
            }
        }
    )
    .then(usuario => {
        //Se valida si se encontro al usuario
        if (usuario !=null) {

            console.log(usuario);

            //Ser genera token JWT
            let token = jwt.sign({
                usuario
            }, 'seed-secret-5APROGV-E09-cbtis-2019-1', {expiresIn: 60 * 60 * 24 * 30});
            
           //Se regresa la respuesta
           res.json({
               ok: true,
               usuario,
               token
           });

        }else {
            res.status(401).json({
                ok: false,
                err: {
                    message: "Usuario o contraseña incorrectos.",
                }
            });
        }
    })
    .catch(err => {
    
        //Se manda a la consola
        console.log("Error al hacer la consulta: "+err);

        return res.status(500).json({
            ok: false,
            err: {
                message: 'Error del server al hacer login: '+err,
            }
        });
    });
 });

 module.exports = app;