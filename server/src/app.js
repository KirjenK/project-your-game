require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

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

app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);
  console.log(`Сервер запущен на ${PORT} порту! Врываемся! `);
});