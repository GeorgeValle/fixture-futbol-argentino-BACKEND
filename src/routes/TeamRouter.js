import {Router} from 'express';

const routes= Router();

import team from '../controllers/TeamController.js';

//**************************************************** */
//route the test server
routes.get('/health', (req, res) => {
    return res.status(200).json({ message: 'Server is on... '})
})

//create a new team instance
routes.post('/new', team.createTeam)

//obtain stats of one team 
routes.get('/:id_team', team.getOneTeam)

//update a team instance
routes.put('/:id_team', team.updateOneTeam)

//delete a team instance
routes.delete('/:id_team', team.deleteOneTeam)


//update score of goals of one team
routes.patch('/ud_goals/:id_team/:goals', team.updateOneTeamGoals)

//increment score of goals of one team
routes.patch('/goals/:id_team/:goals', team.incrementOneTeamGoals)

//obtain totals of goals of one team
routes.get('/goals/:id_team', team.getOneTeamGoals)

//update score of wins of one team
routes.patch('/ud_wins/:id_team/:wins', team.updateOneTeamWins)

//increment score of wins of one team
routes.patch('/wins/:id_team/:wins', team.incrementOneTeamWins)

//update one team losses
routes.patch('/ud_losses/:id_team/:losses', team.updateOneTeamLosses)

//increment one team losses
routes.patch('/losses/:id_team/:losses', team.incrementOneTeamLosses)

//update one team points
routes.patch('/ud_points/:id_team/:points', team.updateOneTeamPoints)

//increment one team points
routes.patch('/points/:id_team/:points', team.incrementOneTeamPoints)

//update one team games Played
routes.patch('/ud_games_played/:id_team/:games_played', team.updateOneTeamGamesPlayed)

//increment one team games Played
routes.patch('/games_played/:id_team/:games_played', team.incrementOneTeamGamesPlayed)

//update one team draws
routes.patch('/ud_draws/:id_team/:draws', team.updateOneTeamDraws)

//increment one team draws
routes.patch('/draws/:id_team/:draws', team.incrementOneTeamDraws)

//update one goals Allowed
routes.patch('/ud_goals_allowed/:id_team/:goals_allowed', team.updateOneTeamGoalsAllowed)

//increment one goals Allowed
routes.patch('/goals_allowed/:id_team/:goals_allowed', team.incrementOneTeamGoalsAllowed)

//update one goals difference
routes.patch('/ud_goals_difference/:id_team/:goals_difference', team.updateOneTeamGoalsAllowed)

//increment one goals difference
routes.patch('/goals_difference/:id_team/:goals_difference', team.incrementOneTeamGoalsDifference)

//reset stats of all teams
routes.patch('/resetAll', team.resetAllStandings)

//obtain stats of all teams
routes.get('/standings',team.getStandings)



const teamRouter = routes;
export {teamRouter};