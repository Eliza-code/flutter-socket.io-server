const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();


// servidor de sockets
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket')

// Path publico
const publicPath = path.resolve( __dirname, 'public');
app.use(express.static(publicPath));



server.listen(process.env.PORT, (err) => {
 console.log('cliente conectado');
 if (err) throw new Error(err);
 console.log('Servidor corriendo en puerto', process.env.PORT);
});
