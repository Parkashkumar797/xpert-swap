import { SocketManagerClient } from "./SocketManagerClient";


export class UserSocketManager {
    static #SocketManagerClient = null;
    static #instance = null;
    constructor() {
        if (UserSocketManager.#SocketManagerClient === null) {
            UserSocketManager.#SocketManagerClient = SocketManagerClient.getInstance();
        }
    }

    sendMessageToUser(userId, message,callback=()=>{}) {
        UserSocketManager.#SocketManagerClient.sendMessageToUser(userId, message);
        callback();
    }

    disconnect() {
        UserSocketManager.#SocketManagerClient.disconnect();
    }

    onIncomingMessage(callback) {
        UserSocketManager.#SocketManagerClient.on("message", callback);
    }

    static getInstance() {
        if (UserSocketManager.#instance === null) {
            UserSocketManager.#instance = new UserSocketManager();
        }
        return UserSocketManager.#instance;
    }
}


