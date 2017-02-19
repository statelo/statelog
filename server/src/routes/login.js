import express from 'express';
import Account from '../models/account';
import passport from 'passport';

const router = express.Router();

router.get('/', (req, res) => {
  Account.findOne({ username: 'statelo' }, (err, obj) => {
    console.log(obj.username);
  });
});

router.post('/', passport.authenticate('local'), function(req, res) {
  Account.findOne({ username: req.body.username }, (err, account) => {
    if(account.username === req.body.username) {
      res.json(account);
    } else {
      res.status(400).json(err);
    }
  });
});

export default router;
