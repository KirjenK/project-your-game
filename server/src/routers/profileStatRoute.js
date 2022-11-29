const router = require('express').Router();
const { Game, User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const UserId = req.session.userId;
    const profileStats = await Game.findAll({ where: { UserId }, include: User, order: [['result', 'DESC']] });
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
