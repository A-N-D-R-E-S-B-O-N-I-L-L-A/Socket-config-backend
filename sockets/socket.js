const socket = require('socket.io')
const UserLogic = require('../classes/user-logic');
const User = require('../classes/usser');

const userLogic = new UserLogic();

const connectUser = (client) => {

    const user = new User(client.id);
    userLogic.addUser(user)

}


const disconect = (client) => {

    client.on('disconnect', () => {
        userLogic.deleteUser(client.id)
    })
}


const listenMessage = (client, ioServer) => {

    client.on('goku', (data) => {

        console.log(data);
        ioServer.emit('respGoku', data)

    })
}

const listenLogin = (client) => {

    client.on('config-user', (payload, callback) => {

        console.log("mensaje recibido", payload);

        callback({
            resp: "god job!",
            payload
        })
    })

}

module.exports = {
    disconect,
    listenMessage,
    listenLogin,
    connectUser
}