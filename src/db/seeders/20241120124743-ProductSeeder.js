'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      name: 'Mikrotik RB951 2nd',
      desc: "Mikrotik RB951 2nd",
      image: "/cloudinary/image.jpg",
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'TP LINK 1440',
      desc: "TP LINK 1440",
      image: "/cloudinary/image.jpg",
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'TP LINK OUTDOOR',
      desc: "TP LINK OUTDOOR",
      image: "/cloudinary/image.jpg",
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
