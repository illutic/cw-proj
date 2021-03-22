import { Router } from 'express';
import userRoutes from './user-routes.js';
import skillRoutes from './skill-routes.js';
import chatRoutes from './chat-routes.js';
import requestRoutes from './request-routes.js';

const router = Router();

router.use('/api', userRoutes);
router.use('/api', skillRoutes);
router.use('/api', skillRoutes);
router.use('/api', chatRoutes);
router.use('/api', requestRoutes);

export default router;
