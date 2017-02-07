import express from 'express';
import path from 'path';
import api from './routes';
import historyApiFallback from 'connect-history-api-fallback';

import bodyParser from 'body-parser';

import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to mongodb');
});

const app = express();

const PORT = 3001;

app.use(bodyParser.json())

app.use('/api', api);

app.use(historyApiFallback());

app.use('/', express.static(__dirname + '/../../build'));

app.listen(PORT, () => {
  console.log('App listening on port', PORT);
});

export default app;
