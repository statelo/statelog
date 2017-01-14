import express from 'express';
import friends from './friends';

const router = express.Router();
router.use('/friends', friends);

export default router;
