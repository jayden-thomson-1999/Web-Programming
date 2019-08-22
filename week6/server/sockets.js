module.exports = {
    connect: function(io, PORT) {
        io.on('connect', (socket) => {
            //when a connection request comes in output to the server console
            console.log(`user connection on port ${PORT} : ${socket.id}`);

            //when a message comes in, emit it back to all sockets with the message
            socket.on('message', (message) => {
                console.log(`"${message}" port ${PORT}:${socket.id}`);
                io.emit('message', message);
            });
        });
    }
}