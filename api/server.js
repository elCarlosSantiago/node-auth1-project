const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const usersRouter = require('./users/users-router');
const authRouter = require('./auth/auth-router.js');

const server = express();

server.use(
  session({
    name: 'chocolatechip',
    secret: process.env.SESSION_SECRET || 'hide this in env',
    cookie: {
      maxAge: 1000 * 60 * 30,
      secure: false,
      httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
    store: new KnexSessionStore({
      knex: require('../data/db-config'),
      tablename: 'sessions',
      sidfieldname: 'sesh_id',
      createtable: true,
      clearInterval: 1000 * 60 * 60,
    }),
  })
);

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
  res.json({ api: 'up' });
});

// eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
