import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('users_id').primary();
        table.string('users_name').notNullable();
        table.string('users_email').notNullable();
        table.integer('users_password').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}

