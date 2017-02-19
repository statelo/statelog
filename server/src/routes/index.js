import express from 'express';
import comments from './comments';
import signup from './signup';
import login from './login';

const router = express.Router();

router.use('/comments', comments);
router.use('/signup', signup);
router.use('/login', login);

export default router;
