const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 4000 });

// escuchar conexiones
server.on("connection", (socket) => {
    // escuchar mensaje
    socket.on("message", (message) => {
        // procesar
        const data = `🦄  ${message}`;

        // enviar el mensaje al cliente
        // socket.send(data);

        // enviar a todos los clientes
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });

        // enviar a todos los clientes excepto a uno mismo
        // server.clients.forEach(function each(client) {
        //     if (client !== socket && client.readyState === WebSocket.OPEN) {
        //         client.send(data);
        //     }
        // });
    });

    // enviar un mensaje
    socket.send(`🐱‍🚀: Bienvenido`);
});
