/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      // Тема номер 1
      {
        title: 'Какое словосочетание является названием знаменитого танго Хосе М. Люкьеси?', price: 200, answer: 'Брызги шампанского', ThemeId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Где живет Снежная Королева из сказки Г. Х. Андерсена?', price: 400, answer: 'В Финляндии', ThemeId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Какой американский президент официально покончил с рабством в США?', price: 600, answer: 'Линкольн', ThemeId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Сколько всего подвигов совершил Геракл?', price: 800, answer: '12', ThemeId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Как называется празднование 30-летия брака?', price: 1000, answer: 'Жемчужная свадьба', ThemeId: 1, createdAt: new Date(), updatedAt: new Date(),
      },

      // Тема номер 2
      {
        title: 'Что на выходных купил себе Серега?', price: 200, answer: 'Веб-камеру', ThemeId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'В какой стране находится Артем?', price: 400, answer: 'Казахстан', ThemeId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Что Артем солит бомбически всего?', price: 600, answer: 'Свиную грудинку', ThemeId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'К кому из преподавателей относится данная цитата? «Делает не только чтобы работало, но и чтобы красиво было?»', price: 800, answer: '12', ThemeId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Кто из преподавателей раньше преподавал в GeelBrains?', price: 1000, answer: 'Жемчужная свадьба', ThemeId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      // Тема 3
      {
        title: 'На каком материке находится Италия?', price: 200, answer: 'Евразия', ThemeId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Как называют жителей города Смоленска в РФ?', price: 400, answer: 'Смоляне', ThemeId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Какой водопад в мире является самым высоким?', price: 600, answer: 'Анхель', ThemeId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'В это озеро в России впадает 336 рек, а вытекает только одна. Что это за озеро?', price: 800, answer: 'Байкал', ThemeId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Какой материк пересекается всеми меридианами?', price: 1000, answer: 'Антарктида', ThemeId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      // Тема 4
      {
        title: 'Кто является режиссером фильма «Челюсти»?', price: 200, answer: 'Стивен Спилберг', ThemeId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Кто сыграл главную роль в новом Бетмане?', price: 400, answer: 'Роберт Паттинсон', ThemeId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Какой актер сыграл главные роли в фильмах «Догма», «Сорвиголова», «Чужой билет»?', price: 600, answer: 'Бен Аффлек', ThemeId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'В скольких номинациях получил «Оскара» фильм «Титаник»?', price: 800, answer: '11', ThemeId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'В какой первой роли снялся Ван Дамм?', price: 1000, answer: 'Роль Ивана из России', ThemeId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      // Тема 5
      {
        title: 'Самолетная деталь в автомобиле, это?', price: 200, answer: 'Крыло', ThemeId: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Как называется автомобиль у которого оба моста ведущие?', price: 400, answer: 'Полноприводный', ThemeId: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Название какого автомобильного концерна ранее красовалось на Эйфелевой башне?', price: 600, answer: 'Ситроен', ThemeId: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'На сколько километров в режиме форсажа слышны выхлопные газы автомобиля Aston Martin Vantage?', price: 800, answer: '6', ThemeId: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Рекорд скорости достигнутый на атомобиле(округленный до 100 в меньшую сторону)', price: 1000, answer: '1200', ThemeId: 5, createdAt: new Date(), updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
