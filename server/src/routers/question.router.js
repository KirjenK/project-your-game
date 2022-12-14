const router = require('express').Router();
const { Theme, Question } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const allThemesData = await Theme.findAll({ include: Question });
    const allThemes = allThemesData.map((el) => el.dataValues);
    console.log('req/del --- >>> ', req.session?.del);
    res.json({ allThemes, btnDel: req.session?.del, currentResult: req.session.result });
  } catch (err) {
    console.log('Error ==>', err);
  }
});

module.exports = router;
