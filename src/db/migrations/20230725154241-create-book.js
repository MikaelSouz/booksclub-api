"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: { model: "Categories", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      author_id: {
        type: Sequelize.INTEGER,
        references: { model: "Authors", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      name: {
        type: Sequelize.STRING,
      },
      cover_url: {
        type: Sequelize.STRING,
      },
      release_date: {
        type: Sequelize.DATE,
      },
      pages: {
        type: Sequelize.INTEGER,
      },
      synopsis: {
        type: Sequelize.TEXT,
      },
      highlighted: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Books");
  },
};
