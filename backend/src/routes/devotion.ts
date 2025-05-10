import { Router } from 'express';
import { generateDevotion } from '../controllers/devotionController';

const router = Router();

router.post('/generate', generateDevotion);

export const devotionRoutes = router; 