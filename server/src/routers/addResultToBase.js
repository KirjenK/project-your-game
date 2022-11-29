const router = require('express').Router();
const { Question, Game } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { curResult } = req.body;
    console.log('===>>> 👉👉👉 file: addResultToBase.js 👉👉👉 line 7 👉👉👉 curResult', curResult);
    await Game.create({ UserId: req.session.userId, result: curResult });
  } catch (err) {
    console.log('Error ==>', err);
  }
});

module.exports = router;
