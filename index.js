const express = require('express');
const { disconect, listenMessage, listenLogin, connectUser } = require('./sockets/socket')
const app = express();

const http = require('http').Server(app)


const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST", "DELETE", "PUT"]
    }
})




socketIO.on("connection", socket => {

    console.log("=============client connect id:===========");
    console.log(socket.id);
    console.log("==========================================");


    // connect user
    connectUser(socket);


    disconect(socket);
    listenMessage(socket, socketIO)
    listenLogin(socket)


})

http.listen(3000, () => {
    console.log("3000 connect");
})