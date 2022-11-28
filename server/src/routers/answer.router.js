const router = require('express').Router();
const { Question } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    const arr = [];
    arr.push(id);
    console.log('arr --- >>> ', arr);
    req.session.del = [];
    req.session.del.push(arr);
    console.log('req.session.del[id] --- >>> ', req.session.del);
    const questionData = await Question.findOne({ where: { id } });
    const question = questionData.dataValues;
    res.json(question);
  } catch (err) {
    console.log('Error ==>', err);
  }
});

module.exports = router;
