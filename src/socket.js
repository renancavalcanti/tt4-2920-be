const { Server } = require("socket.io");

let io;

const initializeSocket = (server) => {
    io = new Server(server, {
        cors: {
            orgin: "*"
        }
    });

    io.on("connection", (socket)=>{
        socket.emit("socket:ready", {
            message: "Websocket connection estalished!"
        })
    });

    return io;
}

const emitTaskCreated = (task) => {
    if(!io){
        return;
    }

    io.emit("task:created", {
        message: "A new task was created",
        data: { task }
    });
}

module.exports = { initializeSocket, emitTaskCreated };