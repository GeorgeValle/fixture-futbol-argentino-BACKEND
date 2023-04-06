import team from '../daos/TeamDAO.js';

class TeamService{

    SaveTeam = async(teamData)=>{
        return await team.saveData(teamData)
    }
}

export default new TeamService();