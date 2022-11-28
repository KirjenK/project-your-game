const router = require('express').Router();
const { Game } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const profileStats = await Game.findAll({ order: [['result', 'DESC']] });
    res.json(profileStats);
  } catch (err) {
    console.log('Error ==>', err);
  }
});

module.exports = router;
