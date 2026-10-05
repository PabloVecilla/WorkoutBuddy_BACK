'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "workout_exercises",
      "weight_kg", {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: true
      }
    ); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      "workout_exercises",
      "weight_kg"
    ); 
  }
};
