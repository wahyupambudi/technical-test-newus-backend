'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      name: 'Mikrotik RB951 2nd',
      desc: "Mikrotik RB951 2nd",
      image: "https://res.cloudinary.com/dulz7fjbz/image/upload/v1732129616/newus/pg3fzii8dsrdjynkbckm.png",
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'TP LINK 1440',
      desc: "TP LINK 1440",
      image: "https://res.cloudinary.com/dulz7fjbz/image/upload/v1732129616/newus/pg3fzii8dsrdjynkbckm.png",
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'TP LINK OUTDOOR',
      desc: "TP LINK OUTDOOR",
      image: "https://res.cloudinary.com/dulz7fjbz/image/upload/v1732129616/newus/pg3fzii8dsrdjynkbckm.png",
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
