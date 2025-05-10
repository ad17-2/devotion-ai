import { Router } from 'express';
import { getBiblePassage } from '../controllers/bibleController';

const router = Router();

router.get('/search', getBiblePassage);

export const bibleRoutes = router; 