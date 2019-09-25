import express from 'express';
import cors from 'cors'
import { PORT } from './constants/index';
import router from './router';
import errorHandler from './errorHandler/errorHandler';
require('./db/mongoose');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.use(errorHandler);

app.listen(PORT);