import io from "socket.io-client";
import { makeAutoObservable } from "mobx";

export class ChatStore {
    socket = null;
    nickname = '';
    msg = '';
    messages = [];
    
    constructor(AuthStore) {
        makeAutoObservable(this);
        this.AuthStore = AuthStore;
        this.socket = io('', {
            transports: ['websocket']
        });
        this.socket.on("chat message", (message) => {
            const data = JSON.parse(message);
            this.setMessages(data);
        });
    }
    
    typeMessage(message) {
        this.msg = message;
    }

    clearInput() {
        this.msg = '';
    }

    setMessages = (message) => {
        this.messages.push({nickname: message.nickname, msg: message.msg})
    }

    sendMessage(value) {
        if(value) {            
            this.socket.emit('chat message', JSON.stringify({
                nickname: this.AuthStore.loginUser,
                msg: value
            }));
    
            this.clearInput();
        } else {
            alert('заполните поле')
        }
    }
}