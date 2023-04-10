
import {MongoDAO} from './MongoDAO.js';
import MatchModel from '../models/MatchModel.js';
// import {logInfo, errorLogger} from '../utils/Logger.js'

//create the new class Team
class Match extends MongoDAO{ //extends Connection
    constructor(){
        super(MatchModel)
    }

}

export default new Match