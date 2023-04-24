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
            return res.status(200).json({message:"Team found",data: team})
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
            logInfo.info(`deleted Team:  route /team/:id_team', team.deleteOneTeam)
            `)
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
            logInfo.info(`updated Team goals:  route team/ud_goals/:id_team/:goals `)
            return res.status(200).json({message: "Team added: ", updatedTeam})
        }catch(err){
            return res.status(404).json({ message: 'Failed to update goals team'})
        }
    }

    //increment one team goals
    async incrementOneTeamGoals(req,res){
        try{
            const { id_team } = req.params
            if (!id_team) return res.status(400).json( {message: "Id required"});
            const {goals} = req.params
            if (!goals) return res.status(400).json( {message: "Goals required"});
            const incrementTeam = await teamService.incrementById(id_team,{goals:{ $inc: goals }})
            logInfo.info(`Increment Goals Team:  route /team/goals/id_team/:goals`)
        }catch(err){
            return res.status(404).json({ message: 'Failed to increment goals team'})
        }
    }    

    //get one team goals
    async getOneTeamGoals(req,res){
        try{
            const { id_team } = req.params
            if (!id_team) return res.status(400).json( {message: "Id required"});
            const team = await teamService.getTeamById(id_user)
            if(!team) return res.status(404).json({ message: 'Team does not exits'})
            return res.status(200).json({message:"Team data goals found",data: team.goals})
        }catch(err){
            errorLogger.error(`error to obtain the team goals, getById: ${err}`);
            return res.status(404).json({ message: 'Error to get the goals team'});
        }
    }

    //update one team wins
    async updateOneTeamWins(req,res){
        try{
            const { id_team } = req.params
            if (!id_team) return res.status(400).json( {message: "Id required"});
            const {wins} = req.params
            if (!wins) return res.status(400).json( {message: "wins required"});
            const updatedTeamWins = await teamService.updateTeamById(id_team,{wins:wins})
            logInfo.info(`updated Team wins:  route /ud_wins/id_team`)
            return res.status(200).json({message: "Team wins updated: ", updatedTeamWins})
        }catch(err){
            return res.status(404).json({ message: 'Failed to update team wins'})
        }
    }

    //increment one team wins
    async incrementOneTeamWins(req,res){
        try{
            const { id_team } = req.params
            if (!id_team) return res.status(400).json( {message: "Id required"});
            const {wins} = req.params
            if (!wins) return res.status(400).json( {message: "wins required"});
            const incrementTeamWins = await teamService.incrementById(id_team,{wins:{ $inc: wins }})
            logInfo.info(`Increment Wins Team:  route /team/wins/:id_team/:wins`)
            return res.status(200).json({message: "Team wins updated: ", incrementTeamWins})

        }catch(err){
            return res.status(404).json({ message: 'Failed to increment wins team'})
        }
    }

    //update one team losses
    async updateOneTeamLosses(req,res){
        try{
            const { id_team } = req.params
            if (!id_team) return res.status(400).json( {message: "Id required"});
            const {losses} = req.params
            if (!losses) return res.status(400).json( {message: "losses required"});
            const updatedTeamLosses = await teamService.updateTeamById(id_team,{losses:losses})
            logInfo.info(`updated Team Losses:  route team/ud_losses/:id_team/:losses`)
            return res.status(200).json({message: "Team losses updated: ", updatedTeamLosses})
        }catch(err){
            return res.status(404).json({ message: 'Failed to update team losses'})
        }
    }

    //increment one team losses
    async incrementOneTeamLosses(req,res){
        try{
            const { id_team } = req.params
            if (!id_team) return res.status(400).json( {message: "Id required"});
            const {losses} = req.params
            if (!losses) return res.status(400).json( {message: "losses required"});
            const incrementTeamLosses = await teamService.incrementById(id_team,{losses:{ $inc: losses }})
            logInfo.info(`Increment Losses Team:  route /team/losses/:id_team/:losses`)
            return res.status(200).json({message: "Team losses updated: ", incrementTeamLosses})

        }catch(err){
            return res.status(404).json({ message: 'Failed to increment losses team'})
        }
    }

    //update one team Points
    async updateOneTeamPoints(req,res){
        try{
            const { id_team } = req.params
            if (!id_team) return res.status(400).json( {message: "Id required"});
            const {points} = req.params
            if (!points) return res.status(400).json( {message: "points required"});
            const updatedTeamPoints = await teamService.updateTeamById(id_team,{points:points})
            logInfo.info(`updated Team points:  route team/ud_points/:id_team/:points`)
            return res.status(200).json({message: "Team points updated: ", updatedTeamPoints})
        }catch(err){
            return res.status(404).json({ message: 'Failed to update team points'})
        }
    }

    //increment one team Points
    async incrementOneTeamPoints(req,res){
        try{
            const { id_team } = req.params
            if (!id_team) return res.status(400).json( {message: "Id required"});
            const {points} = req.params
            if (!points) return res.status(400).json( {message: "points required"});
            const incrementTeamPoints = await teamService.incrementById(id_team,{points:{ $inc: points }})
            logInfo.info(`Increment Points Team:  route /team/points/:id_team/:points`)
            return res.status(200).json({message: "Team points updated: ", incrementTeamPoints})

        }catch(err){
            return res.status(404).json({ message: 'Failed to increment points team'})
        }
    }

    //reset stats of all teams
    async resetAllStandings(req,res){
        try{
            
            fieldsToReset ={goals:0,wins:0,points:0,gamesPlayed:0,draws:0,goalsAllowed:0,GoalDifference:0}
            countModified = await teamService.resetAllTeams(fieldsToReset)
            return res.status(200).json({message: "Number of reset teams: ", countModified})
        }catch(err){
            return res.status(404).json({ message: `Failed to reset all teams, error: ${err}`})
        }

    }

    //get stats for all teams
    async getStandings(req,res){
        try{
            //TO DO: use method getAllTeams 
            const teams = await teamService.getAllTeams()
            if(!teams) return res.status(404).json({ message: 'Teams does not exits'})
            return res.status(200).json({message:"Teams founded",data: teams})
        }catch(err){
            errorLogger.error(`error to obtain all teams, getAllTeams: ${err}`);
            return res.status(404).json({ message: 'Error to get all teams'});
        }
    }
    


}

export default new Team();