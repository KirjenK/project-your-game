const router = require('express').Router();
const { Game } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const UserId = req.session.userId;
    console.log(UserId);
    const profileStats = await Game.findAll({ where: { UserId }, order: [['result', 'DESC']] });
    const bestResult = await Game.findOne({ where: { UserId }, order: [['result', 'DESC']] });
    if (profileStats && bestResult) {
      res.json({ profileStats, bestResult });
    } else {
      res.json('Игр нету');
    }
  } catch (err) {
    console.log('Error ==>', err);
  }
});

module.exports = router;
