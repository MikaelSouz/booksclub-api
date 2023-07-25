"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        name: "Romance",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Literatura e Ficção",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "HQs e Mangás",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Infantil",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Religiosidade e Espiritualidade",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Didáticos e Escolares",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Autoajuda",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Biografia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
