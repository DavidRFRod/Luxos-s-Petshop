import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('employees_adress', table => {
        table.increments('employees_adress_id').primary();

        table.integer('employees_id')
        .notNullable()
        .references('employees_id')
        .inTable('employees');

        table.integer('adress_id')
        .notNullable()
        .references('adress_id')
        .inTable('adress');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('employees_adress');
}

