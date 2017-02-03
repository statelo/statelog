import express from 'express';
import path from 'path';
import api from './routes';
import historyApiFallback from 'connect-history-api-fallback';

const app = express();

const PORT = 4000;

app.use('/api', api);

app.use(historyApiFallback());

app.use('/', express.static(__dirname + '/../../build'));

app.listen(PORT, () => {
  console.log('App listening on port', PORT);
});

export default app;
