const EventEmitter = require('events');

class User {
    constructor(name) {
        this.name = name;
        this.messages = [];
        this.rooms = {};
        this.messageListener = (message) => {
            this.messages.push(message);
        }
    }
    joinRoom(room) {
        this.messageListener = (message) => {
            this.messages.push(message);
        }
        room.on('newMessage', this.messageListener);
        this.rooms[room.name] = room;
    }

    leaveRoom(roomName) {
        this.rooms[roomName].removeListener('newMessage', this.messageListener);
        delete this.rooms[roomName];
    }


    getMesssages(roomName) {
        return this.messages.filter((message) => {
            return message.roomName === roomName;
        })
    }
    printMessages(roomName) {
        this.getMesssages(roomName).forEach((message) => {
            console.log(`>> [${message.roomName}]:(${message.from}): ${message.message}`);
        });
    }
    sendMessage(roomName, message) {
        this.rooms[roomName].emit('newMessage', {
            message,
            roomName,
            from: this.name
        });
    }
}

class Room extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
}
const bob = new User('Bob');
const kevin = new User('Kevin');
const lobby = new Room('Lobby');
bob.joinRoom(lobby);
kevin.joinRoom(lobby);
bob.sendMessage('Lobby', 'Hi all');
bob.sendMessage('Lobby', 'I am new to this room.');
bob.printMessages('Lobby');

kevin.sendMessage('Lobby', 'Hi bob');
bob.sendMessage('Lobby', 'Hey kevin');
kevin.sendMessage('Lobby', 'Welcome!');

kevin.printMessages('Lobby');
bob.leaveRoom('Lobby');
kevin.sendMessage('Lobby', 'I got a good news for you guys');
bob.printMessages('Lobby');
kevin.printMessages('Lobby');