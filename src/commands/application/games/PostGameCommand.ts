import { CreateGame } from "../../../domain/games/CreateGame";
import { CRUDCommandFactory } from "../../../domain/games/CRUDCommandFactory";
import { Games } from "../../../entity/Games";


export class POSTCommand<ICommand> {
    private game:Games;

    constructor(game:Games) {
        this.game = game
    }

    public execute = () => {
        const crudCommandFactory = new CRUDCommandFactory()
        
        const commandName = CreateGame.name

        const config = {
            commandName,
            args: this.game
        }
        const command = crudCommandFactory.makeCommand(config)

        const results = command.execute()

        return results.status ?
            { status: true } : 
            { status: false }
    }
}