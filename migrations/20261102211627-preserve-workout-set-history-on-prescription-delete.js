'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Wrap sql operations in a transaction ensuring atomic behavior
    return queryInterface.sequelize.transaction(async (transaction) => {
      // Find foreign keys at workout_sets, -->
      const foreignKeys =
        await queryInterface.getForeignKeyReferencesForTable(
          "workout_sets",
          { transaction }
        );
        // --> find in those FK's the ones that belong to the column we want to change (not guessing names)
      const oldForeignKey = foreignKeys.find(
        (key) => key.columnName === "workout_exercise_id"
      );
      // If no FK is found, rollback transaction
      if (!oldForeignKey) {
        throw new Error("workout_exercise_id foreign key not found");
      }
      // remove FK constraint
      await queryInterface.removeConstraint(
        "workout_sets",
        oldForeignKey.constraintName,
        { transaction }
      );
      // Effectively change column to allow null values (allow deleiton without loosing sets)
      await queryInterface.changeColumn(
        "workout_sets",
        "workout_exercise_id",
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        { transaction }
      );
      // workout exercise deletion doesn't automatically delete (cascade) it's sets. The workoutExercise is set null  
      await queryInterface.addConstraint("workout_sets", {
        fields: ["workout_exercise_id"],
        type: "foreign key",
        name: "workout_sets_workout_exercise_id_fkey",
        references: {
          table: "workout_exercises",
          field: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        transaction,
      });
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      // CHECK for sets with null workoutExerciseId
      const orphanedSets = await queryInterface.sequelize.query(
        `SELECT 1
         FROM "workout_sets"
         WHERE "workout_exercise_id" IS NULL
         LIMIT 1`,
        {
          type: Sequelize.QueryTypes.SELECT,
          transaction,
        }
      );
      // --> in case there's any, rollback  
      if (orphanedSets.length > 0) {
        throw new Error(
          "Cannot restore CASCADE: historical sets have deleted prescriptions"
        );
      }
      // Get foreign keys for the table
      const foreignKeys =
        await queryInterface.getForeignKeyReferencesForTable(
          "workout_sets",
          { transaction }
        );
      // find FK referencing workoutExwerciseId column
      const foreignKey = foreignKeys.find(
        (key) => key.columnName === "workout_exercise_id"
      );
      // Remove them
      await queryInterface.removeConstraint(
        "workout_sets",
        foreignKey.constraintName,
        { transaction }
      );
      // Return to notNull values
      await queryInterface.changeColumn(
        "workout_sets",
        "workout_exercise_id",
        {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        { transaction }
      );
      // Return to onDelete CASCADE
      await queryInterface.addConstraint("workout_sets", {
        fields: ["workout_exercise_id"],
        type: "foreign key",
        name: "workout_sets_workout_exercise_id_fkey",
        references: {
          table: "workout_exercises",
          field: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        transaction,
      });
    });
  }
};
