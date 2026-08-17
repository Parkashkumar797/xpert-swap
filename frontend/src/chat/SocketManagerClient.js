import { io } from "socket.io-client";


export class SocketManagerClient {
    static #ioServer = null;
    static #instance = null;

    static getInstance() {
        if (SocketManagerClient.#instance === null) {
            SocketManagerClient.#instance = new SocketManagerClient();
        }
        return SocketManagerClient.#instance;
    }

    constructor() {
        if (!SocketManagerClient.#ioServer) {
            SocketManagerClient.#ioServer = io(`${import.meta.env.VITE_SOCKET_BASE_URL}`, {
                auth: {
                    token: localStorage.getItem("token") || "",
                }
            });

            this.SocketHandlers();
        }
    }

    on(event, callback) {
        SocketManagerClient.#ioServer.on(event, callback);
    }

    sendMessageToUser(userId, message) {
        SocketManagerClient.#ioServer.emit("message", {
            userId,
            message,
            time: new Date().toISOString()
        });
    }

    disconnect() {
        if (SocketManagerClient.#ioServer) {
            SocketManagerClient.#ioServer.disconnect();
        }
    }

    SocketHandlers() {
        const socket = SocketManagerClient.#ioServer;

        socket.on("disconnect", () => {
            console.log("Client disconnected", socket.id);
        });

        socket.on("error", (error) => {
            console.error("Socket.IO error:", error);
        });

        socket.on("connect_error", (error) => {
            console.error("Socket.IO connection error:", error);
        });
    }
}