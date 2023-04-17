import team from '../daos/TeamDAO.js';

class TeamService{

    SaveTeam= async(teamData)=>{
        return await team.saveDataDAO(teamData)
    }
    getTeamById= async(id_team)=>{
        return await team.findByIdDAO(id_team)
    }
    getTeamByField= async(field)=>{
        return await team.findByFieldDA0(field)
    }
    updateTeamById= async(id,obj)=>{
        return await team.updateByIdDAO(id,obj)
    }
    updateOneField= async(field,obj)=>{
        return await team.updateByIdDAO(field,obj)
    }
    deleteTeamById= async(id)=>{
        return await team.deleteByIdDAO(id)
    }
    updateTeamByField= async(id,field)=>{
        return await updateOneFieldById(id,field)
    }
    incrementById= async(id,field)=>{
        return await incrementOneField(id,field)
    }
    getAllTeams= async()=>{
        return await getAllDAO()
    }
    






}

export default new TeamService();