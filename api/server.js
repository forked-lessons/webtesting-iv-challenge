const express = require('express');
const usersRouter = require('../usersRoute');

const users = require('../users/usersModel');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

router.use();
module.exports = server;
