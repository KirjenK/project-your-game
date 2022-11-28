const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const {
      name, email, password, repeatPassword,
    } = req.body;
    const findUser = await User.findOne({ where: { name } });
    if (password !== repeatPassword) {
      res.json({ status: 404, message: 'пароли не совпадают' });
    } else if (!name?.trim() || !password?.trim() || !repeatPassword?.trim()) {
      res.json({ status: 'error', message: 'Пожалуйста заполните все поля' });
    } else if (findUser?.name === name) {
      res.json({ status: 404, message: 'пользователь уже существует' });
    } else if (password.length < 4) {
      res.json({ status: 404, message: 'пароль должен быть больше трех символов' });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, email, password: hashedPassword });
      req.session.username = newUser.name;
      req.session.userId = newUser.id;
      const { username } = req.session;
      const { userId } = req.session;
      res.json({
        status: 200, message: `${username}, поздравляем с успешной регистрацией !`, username, userId,
      });
    }
  } catch (error) {
    console.log('💀 🚀  file: reg.router.js 🚀  line 9 🚀  router.post 🚀  error', error);
  }
});

module.exports = router;
