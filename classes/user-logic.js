class UserLogic {

    userList = []

    constructor() {

    }

    addUser(user) {
        console.log("user mandado", user);
        this.userList.push(user)
        console.log(this.userList, "lista(add user part)");
        return user
    }

    uptadeName(id, newName) {
        let userFound = this.userList.find(user => user.id === id);

        console.log(userFound);
        //    if(userFound === undefined){
        //        console.log("there isnt a user with that id");
        //        return;
        //    }
        let userUptaded = userFound.name = newName

        return userUptaded
    }

    getList() {
        return this.userList
    }

    getUser(id) {
        return this.userList.find(user => user.id === id);
    }

    getUserByRoom(room) {
        return this.userList.find(user => user.room === room);
    }

    deleteUser(id) {

        const userDeleted = this.getUser(id);

        this.userList = this.userList.filter(user => user.id !== id)

        console.log(this.userList);
        return userDeleted
    }
}

module.exports = UserLogic