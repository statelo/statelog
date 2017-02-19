'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _comments = require('./comments');

var _comments2 = _interopRequireDefault(_comments);

var _signup = require('./signup');

var _signup2 = _interopRequireDefault(_signup);

var _login = require('./login');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/comments', _comments2.default);
router.use('/signup', _signup2.default);
router.use('/login', _login2.default);

exports.default = router;