const { sequelize } = require('./models');

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log('База на связи! Все супер!');
  } catch (error) {
    console.error('Ошибка подключения базы данных', error.message);
  }
};
