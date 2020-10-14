import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('pets', table => {
        table.increments('pets_id').primary();
        table.string('pets_name').notNullable();
        table.string('pets_breed').notNullable();
        table.string('pets_fur');
        table.string('pets_birth');
        table.string('pets_observation');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('pets');
}

