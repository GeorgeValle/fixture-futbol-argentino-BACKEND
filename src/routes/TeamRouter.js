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
routes.put('/:id_team', team.updateTeam)

//delete a team instance
routes.delete('/:id_team', team.deleteTeam)


//update score of goals of one team
routes.patch('/ud_goals:id_team', team.updateOneTeamGoals)

//increment score of goals of one team
routes.patch('/goals:id_team', team.incrementOneTeamGoals)

//obtain totals of goals of one team
routes.get('/goals/id_team', team.getOneTeamGoals)

//update score of wins of one team
routes.patch('/ud_wins/id_team', team.updateOneTeamWins)

//increment score of wins of one team
routes.patch('/wins/id_team', team.incrementOneTeamWins)

//update one team losses
routes.patch('/ud_losses/id_team', team.updateOneTeamLosses)

//increment one team losses
routes.patch('/losses/id_team', team.incrementOneTeamLosses)

//update one team points
routes.patch('/ud_points/id_team', team.updateOneTeamPoints)

//increment one team points
routes.patch('/losses/id_team', team.incrementOneTeamPoints)



//reset stats of all teams
routes.patch('/resetAll', team.resetAllStandings)

//obtain stats of all teams
routes.get('/standings',team.getStandings)



const teamRouter = routes;
export {teamRouter};