const router = require('express').Router();
const { Question, Game } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { title, answer, price } = req.body;
    if (price) {
      if (!req.session.result) {
        req.session.result = [-(price)];
        res.json({ currentResult: req.session.result });
        console.log('req.session.result === >>> ', req.session.result);
      } else {
        req.session.result.push(-(price));
        res.json({ currentResult: req.session.result });
        console.log('req.session.result === >>> ', req.session.result);
      }
    } else {
      const currentQuestData = await Question.findOne({ where: { title } });
      const currentQuest = currentQuestData.price;
      const currentQuestMinus = -(currentQuestData.price);

      if (answer === true) {
        if (!req.session.result) {
          req.session.result = [currentQuest];
        } else {
          req.session.result.push(currentQuest);
        }
        res.json({ currentResult: req.session.result });
      } else if (answer === false) {
        if (!req.session.result) {
          req.session.result = [currentQuestMinus];
        } else {
          req.session.result.push(currentQuestMinus);
        }
        res.json({ currentResult: req.session.result });
      }
    }
  } catch (err) {
    console.log('Error ==>', err);
  }
});

module.exports = router;
