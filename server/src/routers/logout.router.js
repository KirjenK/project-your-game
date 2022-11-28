const router = require('express').Router();

router.get('/', (req, res) => {
  req.session.destroy();
  res.clearCookie('authUser');
  res.json({ status: 'success' });
});

module.exports = router;
