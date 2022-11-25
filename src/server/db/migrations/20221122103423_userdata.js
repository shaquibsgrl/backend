/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('userdata', (table) => {
        table.increments();
        table.string('first_name').notNullable().unique();
        table.string('last_name').notNullable();
        table.string('gender').notNullable();
        table.string('email').notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
