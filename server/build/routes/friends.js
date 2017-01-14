'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
  return res.json({
    success: true
  });
});

router.get('/nala', function (req, res) {
  return res.json({
    name: 'Irina',
    description: 'My sister'
  });
});

exports.default = router;