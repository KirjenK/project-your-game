const router = require('express').Router();
const { Theme, Question } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const allThemesData = await Theme.findAll({ include: Question });
    const allThemes = allThemesData.map((el) => el.dataValues);
    res.json(allThemes);
    console.log('===>>> 👉👉👉 file: question.router.js 👉👉👉 line 7 👉👉👉 allThemes', allThemes);
  } catch (err) {
    console.log('Error ==>', err);
  }
});

module.exports = router;
