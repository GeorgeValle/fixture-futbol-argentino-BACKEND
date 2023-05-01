import {Router} from 'express';

const routes= Router();

import match from '../controllers/MatchController.js';

//**************************************************** */
//route the test server
routes.get('/health', (req, res) => {
    return res.status(200).json({ message: 'Server is on... '})
})

//create a new match instance
routes.post('/new', match.createMatch)

//obtain stats of one match 
routes.get('/:id_match', match.getOneMatchById)

//update a match instance
routes.put('/:id_match', match.updateOneMatch)

//update by field
routes.put('/ud_field/:field', match.updateByField)

//delete a match instance
routes.delete('/:id_match', match.deleteOneMatch)

//update stats in both teams by goals 
routes.patch('/result/:id_match/:local_goals/visit_goals', match.updateResult)



const matchRouter = routes;
export {matchRouter};