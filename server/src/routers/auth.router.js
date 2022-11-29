const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ where: { email } });
    if (!findUser) {
      res.json({ message: 'неверно введен логин или пароль' });
    } else {
      const isUserAuth = await bcrypt.compare(password, findUser.password);
      if (!isUserAuth) {
        res.json({ message: 'неверно введен логин или пароль' });
      } else {
        req.session.username = findUser.name;
        req.session.userId = findUser.id;
        const { username } = req.session;
        const { userId } = req.session;
        res.json({ message: 'авторизация прошла успешно', username, userId });
      }
    }
  } catch (error) {
    console.log('💀 🚀  file: auth.router.js 🚀  line 9 🚀  router.post 🚀  error', error);
  }
});

module.exports = router;
