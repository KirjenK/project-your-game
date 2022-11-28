const router = require('express').Router();
const { Question } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    if (req.session.del) {
      req.session.del.push(id);
    } else {
      req.session.del = [id];
    }
    const questionData = await Question.findOne({ where: { id } });
    const question = questionData.dataValues;
    res.json({ question, btnDel: req.session?.del });
  } catch (err) {
    console.log('Error ==>', err);
  }
});

module.exports = router;
