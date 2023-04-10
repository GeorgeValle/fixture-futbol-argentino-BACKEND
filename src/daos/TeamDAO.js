
import {MongoDAO} from './MongoDAO.js';
import TeamModel from '../models/TeamModel.js';
// import {logInfo, errorLogger} from '../utils/Logger.js'

//create the new class Team
class Team extends MongoDAO{  //extends Connection
    constructor(){
        super(TeamModel)
    }

}

export default new Team