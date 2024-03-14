"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", [
      {
        id: "57409d12-ddad-4938-a37a-c17bc33aa4ba",
        name: "patient",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "57409d12-ddad-4938-a37a-c17bc22aa4bc",
        name: "doctor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "57409d13-ddac-4936-a17a-d17ec33ba4ba",
        name: "pharmacist",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "57209d13-feac-2733-a07a-e16ec23ca2bd",
        name: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
