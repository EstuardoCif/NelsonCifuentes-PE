const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// importando rutas
const carRoutes = require('./routes/car');
const { urlencoded } = require('express');


// configuraciones, puerto, carpeta de vistas
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crudcar'
}, 'single'));
app.use(express.urlencoded({extended: false}));




// rutas del servidor
app.use('/', carRoutes);

// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


// inicializando servidor
app.listen(app.get('port'), () => {
    console.log('Servidor funcionando en el puerto 3000')
});
