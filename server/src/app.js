require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const authRouter = require('./routers/auth.router');
const regRouter = require('./routers/reg.router');
const logoutRouter = require('./routers/logout.router');
const userRouter = require('./routers/user.router');
const questionRouter = require('./routers/question.router');
const profileStat = require('./routers/profileStatRoute');
const stat = require('./routers/staticksRoute');
const answerRouter = require('./routers/answer.router');
const gameResultRouter = require('./routers/gameResult.router');

const app = express();

const PORT = process.env.PORT ?? 3010;

const sessions = require('./middlewares/sessions');
const cors = require('./middlewares/cors');
const dbCheck = require('../db/dbCheck');

// Проверяем подключение к БД!
dbCheck();

app.use(morgan('dev'));
app.use(cors);
app.use(sessions);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', userRouter);
app.use('/signin', authRouter);
app.use('/signup', regRouter);
app.use('/profile', profileStat);
app.use('/stat', stat);
app.use('/game', questionRouter);
app.use('/logout', logoutRouter);
app.use('/question', answerRouter);
app.use('/result', gameResultRouter);

app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);
  console.log(`Сервер запущен на ${PORT} порту! Врываемся! `);
});
