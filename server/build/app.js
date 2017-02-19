'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _account = require('./models/account');

var _account2 = _interopRequireDefault(_account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb://localhost/test');
var db = _mongoose2.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to mongodb');
});

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use((0, _expressSession2.default)({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

app.use('/api', _routes2.default);

app.use('/', _express2.default.static(__dirname + '/../../build'));

var LocalStrategy = require('passport-local').Strategy;
_passport2.default.use(new LocalStrategy(_account2.default.authenticate()));
_passport2.default.serializeUser(_account2.default.serializeUser());
_passport2.default.deserializeUser(_account2.default.deserializeUser());

app.listen(4000, function () {
  console.log('App listening on port 4000');
});

exports.default = app;