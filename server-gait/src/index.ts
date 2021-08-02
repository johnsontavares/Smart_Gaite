import 'reflect-metadata';
import express from 'express';
import './database/connect';
import userRoutes from './routes/userRouter';
import justificationRouter from './routes/justificationRouter';
import requisitionRouter from './routes/requisitionRouter';
import morgan from 'morgan';
import 'express-async-errors';
import createExam from './routes/createExam';
import createUser from './routes/createUser';



const app = express();

const cors = require('cors');

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());

app.use(userRoutes);
app.use(requisitionRouter);
app.use(justificationRouter);
app.use(createExam)
app.use(createUser)

app.listen(8081, () => console.log('Server started'));