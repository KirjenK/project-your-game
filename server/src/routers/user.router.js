const router = require('express').Router();

router.get('/', (req, res) => {
  if (req.session.username && req.session.userId) {
    res.json({ username: req.session.username, userId: req.session.userId });
  } else {
    res.json(null);
  }
});

module.exports = router;
