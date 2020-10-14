import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('clients_adress', table => {
        table.increments('clients_adress_id').primary();

        table.integer('clients_id')
        .notNullable()
        .references('clients_id')
        .inTable('clients');

        table.integer('adress_id')
        .notNullable()
        .references('adress_id')
        .inTable('adress');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('clients_adress');
}

