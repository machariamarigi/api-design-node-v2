import express from 'express'
import setupMiddware from './middleware'
import { restRouter } from './api'
import { connect } from './db'
import { signin, protect } from './api/modules/auth'
// Declare an app from express
const app = express();

const apiRouter = express.Router();

app.use('/api', restRouter);

app.get('/', (req, res) => {
  res.json({
    message: 'hello world',
    ok: true
  });
});

export default app;
