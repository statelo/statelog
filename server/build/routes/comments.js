'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _comment = require('../models/comment');

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', function (req, res) {
  var userComment = new _comment2.default({
    text: req.body.text
  });

  userComment.save(function (err, comment) {
    if (err) return console.error(err);
    return res.json(comment);
  });
});

router.get('/', function (req, res) {
  _comment2.default.find(function (err, comment) {
    if (err) return console.error(err);
    return res.json(comment);
  });
});

router.delete('/', function (req, res) {
  _comment2.default.remove(function (err, comment) {
    if (err) return console.error(err);
    return res.json(comment);
  });
});

exports.default = router;