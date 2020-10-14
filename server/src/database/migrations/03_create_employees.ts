import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('employees', table => {
        table.increments('employees_id').primary();
        table.string('employees_name').notNullable();
        table.integer('employees_cpf').notNullable();
        table.integer('employees_whats').notNullable();
        table.integer('employees_salary').notNullable();
        table.integer('employees_commission');
        table.string('employees_email').notNullable();
        table.integer('employees_password').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('employees');
}

