"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        id: "926ade6c-21e7-4866-ae7f-360e1574839a",
        firstname: "dogiteri",
        lastname: "muganga",
        email: "dogiteri@muganga.com",
        password:
          "$2a$10$rBFBTSLIrH2jTMrBPe9QEO3hSVS6UvuYvkPkA1wYzba6B0FIhI1XW", //12345678
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "926ade6c-21e7-4856-ae7f-360e1574839a",
        firstname: "murwayi",
        lastname: "indwara",
        email: "murwayi@indwara.com",
        password:
          "$2a$10$rBFBTSLIrH2jTMrBPe9QEO3hSVS6UvuYvkPkA1wYzba6B0FIhI1XW", //12345678
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "926ade6f-21e7-4866-ae7f-360e1574839a",
        firstname: "umuntu",
        lastname: "imiti",
        email: "umuntu@imiti.com",
        password:
          "$2a$10$rBFBTSLIrH2jTMrBPe9QEO3hSVS6UvuYvkPkA1wYzba6B0FIhI1XW", //12345678
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "926ade6c-21e7-4866-ae7f-360e1574739a",
        firstname: "boss",
        lastname: "admin",
        email: "boss@admin.com",
        password:
          "$2a$10$rBFBTSLIrH2jTMrBPe9QEO3hSVS6UvuYvkPkA1wYzba6B0FIhI1XW", //12345678
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
