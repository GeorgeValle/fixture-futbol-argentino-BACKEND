import matchService from "../services/MatchService";
import teamService from '../services/TeamService.js';
import {logInfo, errorLogger} from '../utils/Logger.js'

//create a new match class
class Match{

    //create a new Match
    async createMatch(req,res){
        try{
            const newMatch = await matchService.saveTeam(req.body)
            logInfo.info(`Team created: ${req.body.name}  route /match/new`)
            return res.status(200).json({message:`Match ${req.body.name} create`, data:newMatch})
        }catch(err){
            errorLogger.error(`error in create a new Match: ${err}`)
            return res.status(400).json({message: err, route: "Match/new", zone: "create new team"})
        }
    }

    // obtain all data of one Match
    async getOneMatchById(req,res){
        try{
            const { id_match } = req.params
            if (!id_match) return res.status(400).json( {message: "Id required"});

            const OneMatch = await matchService.getMatchById(id_match)
            return res.status(200).json({message:`Match ${OneMatch.name} found!`, data:OneMatch})
        }catch(err){
            errorLogger.error(`error Match not found: ${err}`)
            return res.status(404).json({message: err, route: "match/:id_match", zone: "get one match by id"})
        }
    }

    //update stats
    async updateOneMatch(req,res){
        try{
            const { id_match } = req.params
            if (!id_match) return res.status(400).json( {message: "Id required"});
            const matchUpdated = await matchService.updateMatch(req.body,id_match)
            return res.status(200).json({message:`Match updated!`, data:matchUpdated})

        }catch(err){
            errorLogger.error(`error Match not updated: ${err}`)
            return res.status(404).json({message: err, route: "match/:id_match", zone: "update match "})
        }
    }

    //delete a match
    async deleteOneMatch(req,res){
        try{
            const { id_match } = req.params
            if (!id_match) return res.status(400).json( {message: "Id required"});

            const matchDeleted = await matchService.deleteMatch(id_match)
            return res.status(200).json({message:`Match deleted!`, data:matchDeleted})


        }catch(err){
            errorLogger.error(`error Match not deleted: ${err}`)
            return res.status(404).json({message: err, route: "match/:id_match", zone: "delete one match "})
        }
    }

    //update one match by a field
    async updateByField(req, res){
        try{
            
            const { field } = req.params
            if (!field) return res.status(400).json( {message: "field required"});
            if (!req.body) return res.status(400).json( {message: "updates required"});
            
            const matchUpdated = await matchService.updateMatchByField(field,req.body)
            return res.status(200).json({message:`Match updated!`, data:matchUpdated})

        }catch(err){

        }
    }
    //update a match automatically by local goal and local visit
    async updateResult(req,res){
        try{
            const { id_match } = req.params
            if (!id_match) return res.status(400).json( {message: "Id required"});
            const {local_goals} = req.params
            if (!local_goals) return res.status(400).json( {message: "Local goals required"});
            const { visit_goals } = req.params
            if (!visit_goals) return res.status(400).json( {message: "Visit goals required"});

            const match = await matchService.getMatchById(id_match)
            let localTeam = teamService.findOne({name: match.local })
            let visitTeam = teamService.findOne({name: match.visit})
            if(local_goals===visit_goals){
                localTeam.draws+=1
                localTeam.goals+=local_goals
                localTeam.points+=1
                localTeam.goalsAllowed+=visit_goals
                localTeam.gamesPlayed+=1
                localTeam.save()

                visitTeam.draws+=1
                visitTeam.goals+=visit_goals
                visitTeam.points+=1
                visitTeam.goalsAllowed+=local_goals
                visitTeam.gamesPlayed+=1
                visitTeam.save()
            }
            if(local_goals>visit_goals){
                localTeam.wins+=1
                localTeam.goals+=local_goals
                localTeam.points+=3
                localTeam.goalsAllowed+=visit_goals
                localTeam.goalDifference+=local_goals-visit_goals
                localTeam.gamesPlayed+=1
                localTeam.save()

                visitTeam.losses+=1
                visitTeam.goals+=visit_goals
                visitTeam.goalDifference-=visit_goals-local_goals
                visitTeam.goalsAllowed=local_goals
                visitTeam.gamesPlayed+=1
                visitTeam.save()

            }else{
                localTeam.losses+=1
                localTeam.goals+=local_goals
                localTeam.goalsAllowed+=visit_goals
                localTeam.goalDifference+=local_goals-visit_goals
                localTeam.gamesPlayed+=1
                localTeam.save()

                visitTeam.wins+=1
                visitTeam.goals+=visit_goals
                visitTeam.points+=3
                visitTeam.goalDifference-=visit_goals-local_goals
                visitTeam.goalsAllowed=local_goals
                visitTeam.gamesPlayed+=1
                visitTeam.save()
            }
        }catch(err){
            errorLogger.error(`error in update result: ${err}`)
            return res.status(400).json({message: err, route: "match/result/:id_match/:local_goals/visit_goals", zone: "updateResult"})
        }
    }


}

export default new Match();