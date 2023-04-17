import teamService from '../services/TeamService.js';
// import {logInfo, errorLogger} from '../utils/Logger.js'

//create a new team class
class Team{

    //create a new team
    async createTeam(req,res){
        try{

        }catch(err){

        }
    }

    // obtain all stats of one team (by id or by field)
    async getOneTeam(req,res){
        try{

        }catch(err){

        }
    }

    //update stats
    async updateOneTeam(req,res){
        try{

        }catch(err){

        }
    }
    //delete a team
    async deleteOneTeam(req,res){
        try{

        }catch(err){

        }
    }
    
    //update one team goals
    async updateOneTeamGoals(req,res){
        try{

        }catch(err){

        }
    }

    //increment one team goals
    async incrementOneTeamGoals(req,res){
        try{

        }catch(err){

        }
    }    

    //get one team goals
    async getOneTeamGoals(req,res){
        try{
            //TODO: get one team whir: getTeamById or getTeamByField 
            //and later return team.goals

        }catch(err){

        }
    }

    //update one team wins
    async updateOneTeamWins(req,res){
        try{

        }catch(err){

        }
    }

    //increment one team wins
    async incrementOneTeamWins(req,res){
        try{

        }catch(err){

        }
    }

    //update one team losses
    async updateOneTeamLosses(req,res){
        try{

        }catch(err){

        }
    }

    //increment one team losses
    async incrementOneTeamLosses(req,res){
        try{

        }catch(err){

        }
    }

    //update one team Points
    async updateOneTeamPoints(req,res){
        try{

        }catch(err){

        }
    }

    //increment one team Points
    async incrementOneTeamPoints(req,res){
        try{

        }catch(err){

        }
    }

    //reset stats of all teams
    async resetAllStandings(req,res){
        try{

        }catch(err){

        }

    }

    //get stats for all teams
    async getStandings(req,res){
        try{
            //TO DO: use method getAllTeams 
        }catch(err){

        }
    }
    


}

export default new Team();