/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [
      { title: 'Вопросы от Васермана', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Преподаватели Elbrus', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Георграфия', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Кино', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Техника и транспорт', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
