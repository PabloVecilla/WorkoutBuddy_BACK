'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction(); 

    try {
      await queryInterface.createTable(
        "workout_sessions", {
          id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
          }, 
          // --- Foreign Keys ---
          user_id: {
              type: Sequelize.INTEGER, 
              allowNull: false,
              references: {
                model: "users",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
          workout_id: {
              type: Sequelize.INTEGER,
              allowNull: false, 
              references: {
                model: "workout",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
          is_in_progress: {
              type: Sequelize.BOOLEAN,
              allowNull: false, 
              defaultValue: true
          },
          started_at: {
              type: Sequelize.DATE,
              allowNull: false, 
              defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
          },
          completed_at: {
              type: Sequelize.DATE,
              allowNull: true
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated_at: {
              type: Sequelize.DATE,
              allowNull: false,
          },
        }, { transaction }
      )

      await queryInterface.createTable(
        "workout_sets", {
          id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
          }, 
          // --- Foreign Keys ---
          workout_session_id: {
              type: Sequelize.INTEGER, 
              allowNull: false, 
              references: {
                model: "workout_sessions",
                key: "id",
              },
              onUpdate: "CASCADE",
              onDelete: "CASCADE",
          },
          workout_exercise_id: {
              type: Sequelize.INTEGER,
              allowNull: false, 
              references: {
                model: "workout_exercises",
                key: "id",
              },
              onUpdate: "CASCADE",
              onDelete: "CASCADE",
          },
          exercise_id: {
            type: Sequelize.INTEGER,
            allowNull: false, 
            references: {
              model: "exercises",
              key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          }, 
          set_number: {
            type: Sequelize.INTEGER,
            allowNull: false, 
          },
          target_reps: {
              type: Sequelize.STRING,
              allowNull: false
          },
          executed_reps: {
              type: Sequelize.INTEGER, 
              allowNull: true
          }, 
          weight_kg: {
              type: Sequelize.DECIMAL(5, 2),
              allowNull: true
          }, 
          is_completed: {
              type: Sequelize.BOOLEAN, 
              allowNull: false,
              defaultValue: false
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated_at: {
              type: Sequelize.DATE,
              allowNull: false,
          },
        }, { transaction }
      )
      await queryInterface.addConstraint("workout_sets", {
        fields: ["weight_kg"], 
        type: "check",
        name: "weight_kg_NOT_negative", 
        where: {
          weight_kg: {
            [Sequelize.Op.gte]: 0
          }
        },
        transaction
      });
      await queryInterface.addConstraint( "workout_sets", {
        fields: ["set_number"], 
        type: "check", 
        name: "set_number_between_1_and_10", 
        where: {
          set_number: {
            [Sequelize.Op.between]: [1, 10]
          }
        },
        transaction
      });
      await queryInterface.addConstraint( "workout_sets", {
        fields: ["executed_reps"], 
        type: "check", 
        name: "sexecuted_reps_NOT_negative", 
        where: {
          executed_reps: {
            [Sequelize.Op.gte]: 1
          }
        },
        transaction
      });
      await queryInterface.addConstraint("workout_sets", {
        fields: [
          "workout_session_id",
          "workout_exercise_id",
          "set_number",
        ],
        type: "unique",
        name: "workout_sets_session_exercise_set_unique",
        transaction
      }); 

      await queryInterface.addIndex(
        "workout_sessions",
        ["user_id"],
        {
          name: "workout_sessions_user_id_idx",
          transaction,
        }
      );
      
      await queryInterface.addIndex(
        "workout_sessions",
        ["workout_id"],
        {
          name: "workout_sessions_workout_id_idx",
          transaction,
        }
      );
      
      await queryInterface.addIndex(
        "workout_sets",
        ["workout_exercise_id"],
        {
          name: "workout_sets_workout_exercise_id_idx",
          transaction,
        }
      );

      await queryInterface.addIndex(
        "workout_sets",
        ["exercise_id"],
        {
          name: "workout_sets_exercise_id_idx",
          transaction,
        }
      );

      await queryInterface.addIndex(
      "workout_sessions",
      ["user_id", "workout_id"],
      {
        name: "workout_sessions_one_active_per_workout_idx",
        unique: true,
        where: {
          is_in_progress: true,
        },
        transaction,
      }
    );

      await transaction.commit(); 
    } catch (error) {
      await transaction.rollback(); 
      throw error
    }
  },

  async down (queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.dropTable("workout_sets", {
                transaction,
            });

            await queryInterface.dropTable("workout_sessions", {
              transaction,
            });

            await transaction.commit();

        } catch (error) {
            await transaction.rollback();
            throw error;
        }
  }
};
