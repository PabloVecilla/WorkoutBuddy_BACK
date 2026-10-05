"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.createTable(
                "users",
                {
                    id: {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                    },
                    name: {
                        type: Sequelize.STRING,
                        allowNull: false,
                    },
                    email: {
                        type: Sequelize.STRING,
                        allowNull: false,
                        unique: true,
                    },
                    password_hash: {
                        type: Sequelize.STRING,
                        allowNull: false,
                    },
                    created_at: {
                        type: Sequelize.DATE,
                        allowNull: false,
                    },
                    updated_at: {
                        type: Sequelize.DATE,
                        allowNull: false,
                    },
                },
                { transaction }
            );

            await queryInterface.createTable(
                "exercises",
                {
                    id: {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                    },
                    external_id: {
                        type: Sequelize.STRING,
                        allowNull: true,
                    },
                    source: {
                        type: Sequelize.STRING,
                        allowNull: true,
                    },
                    name: {
                        type: Sequelize.STRING,
                        allowNull: false,
                    },
                    muscle: {
                        type: Sequelize.STRING,
                        allowNull: true,
                    },
                    secondary_muscle: {
                        type: Sequelize.STRING,
                        allowNull: true,
                    },
                    movement_pattern: {
                        type: Sequelize.STRING,
                        allowNull: false,
                    },
                    equipment: {
                        type: Sequelize.STRING,
                        allowNull: true,
                    },
                    complexity: {
                        type: Sequelize.STRING,
                        allowNull: true,
                    },
                    image_url: {
                        type: Sequelize.STRING,
                        allowNull: true,
                    },
                    instructions: {
                        type: Sequelize.TEXT,
                        allowNull: true,
                    },
                    raw: {
                        type: Sequelize.JSON,
                        allowNull: true,
                    },
                    created_at: {
                        type: Sequelize.DATE,
                        allowNull: false,
                    },
                    updated_at: {
                        type: Sequelize.DATE,
                        allowNull: false,
                    },
                },
                { transaction }
            );

            await queryInterface.createTable(
                "programs",
                {
                    id: {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                    },
                    name: {
                        type: Sequelize.STRING,
                        allowNull: true,
                    },
                    goal: {
                        type: Sequelize.ENUM(
                            "muscle_gain",
                            "fat_loss",
                            "strength",
                            "recomp"
                        ),
                        allowNull: false,
                    },
                    level: {
                        type: Sequelize.ENUM(
                            "beginner",
                            "intermediate",
                            "pro"
                        ),
                        allowNull: false,
                    },
                    frequency: {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                    },
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
                    created_at: {
                        type: Sequelize.DATE,
                        allowNull: false,
                    },
                    updated_at: {
                        type: Sequelize.DATE,
                        allowNull: false,
                    },
                },
                { transaction }
            );

            await queryInterface.sequelize.query(
                `
                ALTER TABLE "programs"
                ADD CONSTRAINT "programs_frequency_between_1_and_7"
                CHECK ("frequency" BETWEEN 1 AND 7);
                `,
                { transaction }
            );

            await queryInterface.createTable(
                "workout",
                {
                    id: {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                    },
                    day_number: {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                    },
                    focus: {
                        type: Sequelize.ENUM(
                            "abs",
                            "arms",
                            "chest",
                            "full_body",
                            "legs",
                            "lower",
                            "pull",
                            "push",
                            "shoulders",
                            "upper"
                        ),
                        allowNull: false,
                    },
                    program_id: {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                        references: {
                            model: "programs",
                            key: "id",
                        },
                        onUpdate: "CASCADE",
                        onDelete: "CASCADE",
                    },
                    created_at: {
                        type: Sequelize.DATE,
                        allowNull: false,
                    },
                    updated_at: {
                        type: Sequelize.DATE,
                        allowNull: false,
                    },
                },
                { transaction }
            );

            await queryInterface.createTable(
                "workout_exercises",
                {
                    id: {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
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
                    exercise_id: {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                        references: {
                            model: "exercises",
                            key: "id",
                        },
                        onUpdate: "CASCADE",
                        onDelete: "RESTRICT",
                    },
                    order: {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                    },
                    sets: {
                        type: Sequelize.INTEGER,
                        allowNull: true,
                        defaultValue: 3,
                    },
                    reps: {
                        type: Sequelize.STRING,
                        allowNull: true,
                        defaultValue: "10",
                    },
                    rest_seconds: {
                        type: Sequelize.INTEGER,
                        allowNull: true,
                        defaultValue: 60,
                    },
                    created_at: {
                        type: Sequelize.DATE,
                        allowNull: false,
                    },
                    updated_at: {
                        type: Sequelize.DATE,
                        allowNull: false,
                    },
                },
                { transaction }
            );

            await queryInterface.addIndex("programs", ["user_id"], {
                name: "programs_user_id_index",
                transaction,
            });

            await queryInterface.addIndex("exercises", ["movement_pattern"], {
                name: "exercises_movement_pattern_index",
                transaction,
            });

            await queryInterface.addIndex("workout", ["program_id"], {
                name: "workout_program_id_index",
                transaction,
            });

            await queryInterface.addIndex(
                "workout_exercises",
                ["workout_id"],
                {
                    name: "workout_exercises_workout_id_index",
                    transaction,
                }
            );

            await queryInterface.addIndex(
                "workout_exercises",
                ["exercise_id"],
                {
                    name: "workout_exercises_exercise_id_index",
                    transaction,
                }
            );

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    },

    async down(queryInterface) {
        const transaction = await queryInterface.sequelize.transaction();

        try {
            await queryInterface.dropTable("workout_exercises", {
                transaction,
            });

            await queryInterface.dropTable("workout", {
                transaction,
            });

            await queryInterface.dropTable("programs", {
                transaction,
            });

            await queryInterface.dropTable("exercises", {
                transaction,
            });

            await queryInterface.dropTable("users", {
                transaction,
            });

            await queryInterface.sequelize.query(
                'DROP TYPE IF EXISTS "enum_workout_focus";',
                { transaction }
            );

            await queryInterface.sequelize.query(
                'DROP TYPE IF EXISTS "enum_programs_level";',
                { transaction }
            );

            await queryInterface.sequelize.query(
                'DROP TYPE IF EXISTS "enum_programs_goal";',
                { transaction }
            );

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    },
};