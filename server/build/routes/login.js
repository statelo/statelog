'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _account = require('../models/account');

var _account2 = _interopRequireDefault(_account);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
  _account2.default.findOne({ username: 'statelo' }, function (err, obj) {
    console.log(obj.username);
  });
});

router.post('/', _passport2.default.authenticate('local'), function (req, res) {
  _account2.default.findOne({ username: req.body.username }, function (err, account) {
    if (account.username === req.body.username) {
      res.json(account);
    } else {
      res.status(400).json(err);
    }
  });
});

exports.default = router;