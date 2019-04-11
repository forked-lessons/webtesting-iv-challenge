const db = require('../data/dbConfig.js');
const Users = require('./usersModel.js');

// returns 201
// insert the user
describe('users model', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  describe('insert()', () => {
    it('should insert the provided users', async () => {
      await Users.insert({ name: 'gaffer' });
      await Users.insert({ name: 'aragorn' });
      await Users.insert({ name: 'gandalf' });

      const users = await db('users');
      expect(users).toHaveLength(3);
    });

    // it('should insert the provided user', async () => {
    //   let user = await Users.insert({ name: 'gaffer' });
    //   expect(user.name).toBe('gaffer');

    //   user = await Users.insert({ name: 'sam' });
    //   expect(user.name).toBe('sam');
    // });
  });
});
