const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', // Cambia esto si tu base de datos está en otro host
    user: 'root', // Tu usuario de MySQL
    password: '123456', // Tu contraseña de MySQL
    database: 'reconocimiento1'  // Cambiado de 'reconocimiento' a 'reconocimiento1'
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos: ', err.stack);
        return;
    }
    console.log('Conectado a la base de datos MySQL con el id: ' + connection.threadId);
});

module.exports = connection;
