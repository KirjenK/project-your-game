const router = require('express').Router();
const { Game } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    // const UserId = req.session.userId;
    const profileStats = await Game.findAll({ where: { UserId: 1 }, order: [['result', 'DESC']] });
    const bestResult = await Game.findOne({ where: { UserId: 1 }, order: [['result', 'DESC']] });
    res.json({ profileStats, bestResult });
  } catch (err) {
    console.log('Error ==>', err);
  }
});

module.exports = router;
