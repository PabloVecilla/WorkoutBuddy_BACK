"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction =
      await queryInterface.sequelize.transaction();

    try {
      await queryInterface.addColumn(
        "workout_sets",
        "intensity_level",
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        { transaction }
      );

      await queryInterface.addColumn(
        "workout_sets",
        "duration_minutes",
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        { transaction }
      );

      await queryInterface.addColumn(
        "workout_sets",
        "target_duration_minutes",
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        { transaction }
      );

      await queryInterface.changeColumn(
        "workout_sets",
        "target_reps",
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
        { transaction }
      );

      await queryInterface.addConstraint("workout_sets", {
        fields: ["intensity_level"],
        type: "check",
        name: "check_intensity_level_range",
        where: {
          intensity_level: {
            [Sequelize.Op.gte]: 1,
            [Sequelize.Op.lte]: 10,
          },
        },
        transaction,
      });

      await queryInterface.addConstraint("workout_sets", {
        fields: ["duration_minutes"],
        type: "check",
        name: "check_duration_minutes_range",
        where: {
          duration_minutes: {
            [Sequelize.Op.gte]: 1,
            [Sequelize.Op.lte]: 180,
          },
        },
        transaction,
      });

      await queryInterface.addConstraint("workout_sets", {
        fields: ["target_duration_minutes"],
        type: "check",
        name: "check_target_duration_minutes_range",
        where: {
          target_duration_minutes: {
            [Sequelize.Op.gte]: 1,
            [Sequelize.Op.lte]: 180,
          },
        },
        transaction,
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction =
      await queryInterface.sequelize.transaction();

    try {
      await queryInterface.removeConstraint(
        "workout_sets",
        "check_intensity_level_range",
        { transaction }
      );

      await queryInterface.removeConstraint(
        "workout_sets",
        "check_duration_minutes_range",
        { transaction }
      );

      await queryInterface.removeConstraint(
        "workout_sets",
        "check_target_duration_minutes_range",
        { transaction }
      );

      // Must happen before removing target_duration_minutes.
      await queryInterface.sequelize.query(
        `
          UPDATE workout_sets
          SET target_reps =
            CONCAT(target_duration_minutes, ' min')
          WHERE target_reps IS NULL
            AND target_duration_minutes IS NOT NULL
        `,
        { transaction }
      );

      await queryInterface.changeColumn(
        "workout_sets",
        "target_reps",
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
        { transaction }
      );

      await queryInterface.removeColumn(
        "workout_sets",
        "intensity_level",
        { transaction }
      );

      await queryInterface.removeColumn(
        "workout_sets",
        "duration_minutes",
        { transaction }
      );

      await queryInterface.removeColumn(
        "workout_sets",
        "target_duration_minutes",
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};

