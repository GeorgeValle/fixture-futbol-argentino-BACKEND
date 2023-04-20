import teamService from '../services/TeamService.js';
import {logInfo, errorLogger} from '../utils/Logger.js'
import {createTeamValidation} from '../utils/Validations.js'

//create a new team class
class Team{

    //create a new team
    async createTeam(req,res){
        try{
            //validate field name of an team
            createTeamValidation(req.body)
            const newTeam = await teamService.SaveTeam(req.body)
            logInfo.info(`Team created: ${req.body.name}  route /team/new`)
            return res.status(200).json({message:"create created", data:newTeam})
        }catch(err){
            errorLogger.error(`error in create a new team: ${err}`)
            return res.status(400).json({message: err, route: "team/new", zone: "create new team"})
        }
    }

    // obtain all stats of one team (by id or by field)
    async getOneTeam(req,res){
        try{
            const { id_team } = req.params
            if (!id_team) return res.status(400).json( {message: "Id required"});

            const team = await teamService.getTeamById(id_user)
            if(!team) return res.status(404).json({ message: 'Team does not exits'})
        }catch(err){
            errorLogger.error(`error to obtain a team, getById: ${err}`);
            return res.status(404).json({ message: 'Error to get a team'});
        }
    }

    //update stats
    async updateOneTeam(req,res){
        try{
            const { id_team } = req.params
            if (!id_team) return res.status(400).json( {message: "Id required"});
            const updatedTeam = await teamService.updateTeamById(id_user)
            logInfo.info(`added Team:  route /team/id_team`)
            return res.status(200).json({message: "Team added: ", data:updatedTeam})
        }catch(err){
            errorLogger.error("error to update team, function updateOneTeam")
            return res.status(400).json({message: "Team not updated"})
        }
    }
    //delete a team
    async deleteOneTeam(req,res){
        try{
            const { id_team } = req.params
            if (!id_team) return res.status(400).json( {message: "Id required"})
            const teamDeleted = await teamService.deleteTeamById(id_team)
            if (!teamDeleted) return res.status(404).json({ message: 'Team does not exists'})
            return res.status(200).json({ message: 'Product deleted!',data:teamDeleted})
        }catch(err){
            return res.status(404).json({ message: 'Failed to delete team'})
        }
    }
    
    //update one team goals
    async updateOneTeamGoals(req,res){
        try{
            const { id_team } = req.params
            if (!id_team) return res.status(400).json( {message: "Id required"});
            const {goals} = req.params
            if (!goals) return res.status(400).json( {message: "Goals required"});
            const updatedTeam = await teamService.updateTeamById(id_team,{goals:goals})
            logInfo.info(`updated GoalsTeam:  route /team/id_team`)
            return res.status(200).json({message: "Team added: ", updatedTeam})
        }catch(err){
            return res.status(404).json({ message: 'Failed to update goals team'})
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