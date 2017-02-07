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

var _connectHistoryApiFallback = require('connect-history-api-fallback');

var _connectHistoryApiFallback2 = _interopRequireDefault(_connectHistoryApiFallback);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

_mongoose2.default.connect('mongodb://localhost/test');
var db = _mongoose2.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to mongodb');
});

var app = (0, _express2.default)();

var PORT = 3001;

app.use(_bodyParser2.default.json());

app.use('/api', _routes2.default);

app.use((0, _connectHistoryApiFallback2.default)());

app.use('/', _express2.default.static(__dirname + '/../../build'));

app.listen(PORT, function () {
  console.log('App listening on port', PORT);
});

exports.default = app;