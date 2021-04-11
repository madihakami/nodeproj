var express = require('express')
var gamesRouter = express.Router()

import { GameCommandFactory } from '../commands/application/games/GameCommandFactory';
import { Games } from "../entity/Games";

const gameCommandFactory = new GameCommandFactory()

gamesRouter.post('/create', (req, res, next) => {

    const game:Games = JSON.parse(req.query.game)
    const commandName = 'POSTCommand'

    const commandConfig = {
        commandName,
        args: game
    }

    const command = gameCommandFactory.makeCommand(commandConfig)
    const results = command.execute()
    const statusCode = results.status ? 200 : 500

    res.status(statusCode).send('foo')
})





export default gamesRouter
