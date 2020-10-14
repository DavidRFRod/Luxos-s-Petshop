import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('services', table => {
        table.increments('services_id').primary();
        table.string('services_name').notNullable();
        table.decimal('services_valor').notNullable();
        table.string('services_description');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('services');
}

