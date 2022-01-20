import express from "express"
import http from "http"
import { Server, Socket } from "socket.io"

import { ServerSettings } from "./ServerSettings"

export class ExquisiteCorpseServer {
    /**
     * The underlying HTTP server.
     */
    private server: http.Server

    /**
     * The underlying socket IO server.
     */
    private io: Server

    /**
     * Constructor.
     */
    constructor(
        private serverSettings: ServerSettings,
    ) {
        this.server = this.createHttpServer()
        this.io = this.createSocketIOServer()
    }

    /**
     * Creates the HTTP server.
     */
    private createHttpServer() {
        const app = express()

        app.get("/", (req, res) => {
            res.send("<h1>Exquisite Corpse Server</h1>")
        })

        return http.createServer(app)
    }

    /**
     * Creates the socket IO server.
     */
    private createSocketIOServer() {
        const io = new Server(this.server)

        io.on("connection", (socket: Socket) => {

        })

        return io
    }

    /**
     * Starts the server.
     */
    start() {
        const port = this.serverSettings.port
        const hostName = this.serverSettings.hostName
        this.server.listen(port, () => console.log(`Listening on ${hostName} port ${port}`))
    }
}
