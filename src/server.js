import http from 'http';
import app from './app.js'
import { init } from './socket.js'


const server =  http.createServer(app);
const PORT = 8080;


init(server);

server.listen(PORT, () => {
    console.log('Servidor corriendo en puerto 8080 🚀')
});


