import express, {Router} from 'express';
import CompetitionsController from './controllers/CompetitionsController';

const router: Router = express.Router();

router.get('/competitions', CompetitionsController.getCompetitions);

export default router;
