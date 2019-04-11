const express = require('express');
const knex = require('knex');
const config = require('./usersRoute');

const db = knex(config);
const router = express.Router();

router.post('/', (req, res) => {
  try {
  } catch (error) {}
});
