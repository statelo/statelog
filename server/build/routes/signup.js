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

var _signup = require('../../shared/validations/signup');

var _signup2 = _interopRequireDefault(_signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', function (req, res) {
  var _validateInput = (0, _signup2.default)(req.body),
      errors = _validateInput.errors,
      isValid = _validateInput.isValid;

  if (isValid) {
    _account2.default.register(new _account2.default({ username: req.body.username }), req.body.password, function (err, account) {
      if (err) {
        throw err;
      }

      console.log(account);
      _passport2.default.authenticate('local')(req, res, function () {
        res.json({ success: true });
      });
    });
  } else {
    res.status(400).json(errors);
  }
});

exports.default = router;