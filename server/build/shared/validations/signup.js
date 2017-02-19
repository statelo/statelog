'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateInput;

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateInput(data) {
  var errors = {};

  if (_validator2.default.isEmpty(data.username)) {
    errors.username = 'This field is required';
  }

  if (_validator2.default.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }

  return {
    errors: errors,
    isValid: _lodash2.default.isEmpty(errors)
  };
}