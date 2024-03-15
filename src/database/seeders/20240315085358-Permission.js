"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Permissions", [
      {
        id: "4b35a4b0-53e8-48a4-97b0-9d3685d3197c",
        name: "viewPatients",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "4b35a4b0-53e8-48a4-97b0-9d3695d3197a",
        name: "deletePatients",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "4b35a4b0-53e8-48a4-97b0-9d3685d3197b",
        name: "editPatients",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "4b35a4b0-53e8-48a4-97b0-9d3685d3196a",
        name: "makeAppointment",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Permissions", null, {});
  },
};
