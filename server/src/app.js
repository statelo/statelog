import express from 'express';
import path from 'path';
import api from './routes';
import session from 'express-session';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';

import Account from './models/account';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to mongodb');
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', api);

app.use('/', express.static(__dirname + '/../../build'));

const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

app.listen(4000, () => {
  console.log('App listening on port 4000');
});

export default app;
