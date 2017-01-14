import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({
    success: true
  });
});

router.get('/nala', (req, res) => {
  return res.json({
    name: 'Irina',
    description: 'My sister'
  });
});

export default router;
