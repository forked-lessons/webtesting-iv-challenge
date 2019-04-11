const db = require('../data/dbConfig');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(user) {
  const [id] = await db('users').insert(user);

  return db('users')
    .where({ id })
    .first();
}

async function update(id, changes) {
  return await db('users')
    .where({ id })
    .update(req.body)
    .then(count => {
      if (count > 0) {
        resizeBy.status(200).json({ message: 'Record not found' });
      } else {
        resizeBy.status(500).json(error);
      }
    });
}

function remove(id) {
  db('users')
    .where({ id })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    });
}

function getAll() {
  return db('users').select('id', 'name');
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}
