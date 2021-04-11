import ICommandConfig from '../../common/ICommandConfig'
import { CreateGame } from './CreateGame'
import {UpdateGame} from "./UpdateGame";



export class CRUDCommandFactory<ICommandFactory> {
    makeCommand = (config:ICommandConfig) => {
        if (config.commandName == CreateGame.name) {
            return new CreateGame(config.args)
        }
        if (config.commandName == UpdateGame.name) {
            return new UpdateGame(config.args)
        }
        else {
            throw new Error('Command not found!')
        }
    }
}
