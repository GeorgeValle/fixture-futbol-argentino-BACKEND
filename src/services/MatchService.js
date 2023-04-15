import match from '../daos/MatchDAO.js';

class MatchService{

    SaveMatch = async(MatchData)=>{
        return await match.saveDataDAO(MatchData)
    }
}

export default new MatchService();