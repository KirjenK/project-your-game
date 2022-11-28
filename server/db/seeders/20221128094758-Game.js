/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Games', [
      {
        UserId: 1, result: 800, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        UserId: 1, result: 400, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        UserId: 1, result: 600, createdAt: new Date(), updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});
  },
};
