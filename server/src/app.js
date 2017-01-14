import express from 'express';
import morgan from 'morgan';
import path from 'path';
import api from './routes';

const app = express();

const PORT = 3001;

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use('/', express.static(__dirname + '/../../build'));

app.use('/api', api);

app.listen(PORT, () => {
  console.log('App listening on port', PORT);
});

export default app;
