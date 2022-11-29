const router = require('express').Router();
const { Question, Game } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    console.log('req. result === >>>', req.session.result);
    console.log('user ID -------------------- >>>>>>>>> ', req.session.userId);
    const { curResult, end } = req.body;
    if (curResult) {
      await Game.create({ UserId: req.session.userId, result: curResult });
    } else if (end) {
      if (req.session.result) {
        const summResult = req.session.result.reduce((acc, el) => acc + el, 0);
        await Game.create({ UserId: req.session.userId, result: summResult });
        req.session.result = [0];
        req.session.del = [];
        res.json({ message: 'finish', result: summResult });
      } else {
        res.json({ message: 'game over' });
      }
    }
  } catch (err) {
    console.log('Error ==>', err);
  }
});

module.exports = router;
