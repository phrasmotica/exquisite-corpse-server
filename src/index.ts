import { ExquisiteCorpseServer } from "./ExquisiteCorpseServer"
import { ServerSettings } from "./ServerSettings"

const server = new ExquisiteCorpseServer(ServerSettings.readFromEnv())
server.start()
