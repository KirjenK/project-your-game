const router = require('express').Router();
const { Game, User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const stats = await Game.findAll({ include: User, order: [['result', 'DESC']] });
    res.json(stats);
  } catch (err) {
    console.log('Error ==>', err);
  }
});

module.exports = router;
