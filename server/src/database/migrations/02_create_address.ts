import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('address', table => {
        table.increments('address_id').primary();
        table.string('address_city').notNullable();
        table.string('address_neighborhood').notNullable();
        table.string('address_street').notNullable();
        table.integer('address_number').notNullable();
        table.string('address_complement');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('address');
}

