const router = require('express').Router();
const { Game } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const UserId = req.session.id;
    const profileStats = await Game.findAll({ where: { UserId } });
    res.json(profileStats);
  } catch (err) {
    console.log('Error ==>', err);
  }
});

module.exports = router;
