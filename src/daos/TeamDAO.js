import './ConnectionDAOMongo.js';

import TeamModel from '../models/TeamModel.js'
// import {logInfo, errorLogger} from '../utils/Logger.js'

//create the new class Team
class Team{ //extends Connection

    SaveData = async team =>{
        try{
            await TeamModel.create(team);
            return team

        }
        catch(err){
            console.log(err)
        }
    }

}

export default new Team