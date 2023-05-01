import match from '../daos/MatchDAO.js';

class MatchService{

    saveMatch = async(matchData)=>{
        return await match.saveDataDAO(matchData)
    }
    getAllMatches = async()=>{
        return await match.getAllDAO()
    }
    getMatchById = async(id)=>{
        return await match.findByIdDAO(id)
    }
    getMatchByField = async(field)=>{ 
        return await match.findByFieldDAO(field)
    }
    updateMatch = async(id)=>{
        return await match.updateByIdDAO(obj,id)
    }
    deleteMatch = async(id)=>{
        return await match.deleteByIdDAO(id)
    }
    updateMatchByField = async(field,fieldUpdate)=>{
        return await match.updateByFieldDAO(field,fieldUpdate) 
    }
    incrementField = async(field,fieldUpdate)=>{
        return await match.incrementOneFieldDAO(field,fieldUpdate)
    }
    
}

export default new MatchService();