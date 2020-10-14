import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('clients', table => {
        table.increments('clients_id').primary();
        table.string('clients_name').notNullable();
        table.integer('clients_cpf').notNullable();
        table.integer('clients_whats').notNullable();
        table.string('clients_email');
        table.integer('clients_password').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('clients');
}

