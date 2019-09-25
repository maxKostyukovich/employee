import express from 'express';
import cors from 'cors'
import { PORT } from './constants/index';
require('./db/mongoose');

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));