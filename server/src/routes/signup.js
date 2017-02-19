import express from 'express';
import Account from '../models/account';
import passport from 'passport';
import validateInput from '../../shared/validations/signup';

const router = express.Router();

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if(isValid) {
    Account.register(new Account({ username : req.body.username }), req.body.password, (err, account) => {
      if (err) {
          throw err;
      }

      console.log(account);
      passport.authenticate('local')(req, res, () => {
        res.json({ success: true });
      });
    });
  } else {
    res.status(400).json(errors);
  }
});

export default router;
