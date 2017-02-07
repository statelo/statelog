import express from 'express';
import Comment from '../models/comment';

const router = express.Router();

router.post('/', (req, res) => {
  let userComment = new Comment({
    text: req.body.text
  });

  userComment.save((err, comment) => {
    if (err) return console.error(err);
    return res.json(comment)
  });
});

router.get('/', (req, res) => {
  Comment.find((err, comment) => {
    if(err) return console.error(err);
    return res.json(comment);
  })
})

router.delete('/', (req, res) => {
  Comment.remove((err, comment) => {
    if(err) return console.error(err);
    return res.json(comment);
  })
})

export default router;
