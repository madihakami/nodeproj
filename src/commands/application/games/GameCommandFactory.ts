import ICommandConfig from '../../../common/ICommandConfig'
import { POSTCommand } from './PostGameCommand'

export class GameCommandFactory<ICommandFactory> {
    makeCommand = (config:ICommandConfig) => {
        if (config.commandName == POSTCommand.name) {
            return new POSTCommand(config.args)
        } else {
            throw new Error('Command not found!')
        }
    }
}