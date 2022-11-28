const session = require('express-session');
const FileStore = require('session-file-store')(session);

module.exports = session({
  store: new FileStore(),
  name: 'authUser',
  secret: process.env.SECRET || 'your_game',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
});
