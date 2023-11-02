import { Server } from 'socket.io';
import fs from 'fs';

let io;

export const init = (httpServer) => {
    io = new Server(httpServer);

    io.on('connection', (socketClient) => {
        try {
            const productos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));
            socketClient.emit('updateProducts', productos);
        } catch (error) {
            console.error('Error al leer el archivo productos.json:', error);
            socketClient.emit('updateProducts', { error: 'No se pudieron cargar los productos.' });
        }
    });
};


export const emit = (event, data) => {
    io.emit(event, data);
}


