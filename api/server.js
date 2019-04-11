const express = require('express');

const users = require('../users/usersModel');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/users', async (req, res) => {
  const rows = await users.getAll();

  res.status(200).json(rows);
});

module.exports = server;
