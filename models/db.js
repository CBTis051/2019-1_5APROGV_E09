const Sequelize = require('sequelize');

//conexion con la BD sequelize
const sequelize = new Sequelize('proyecto', 'root', 'Acbtis51-', {
    host: 'al17486.tech',
    dialect:  'mysql'
});

sequelize 
     .authenticate()
     .then(() => {
         console.log('Connection has been established  successfully.');
    })
     .catch(err => {
         console.error('Unable to connect to the database:', err);
    });

module.exports= sequelize;
