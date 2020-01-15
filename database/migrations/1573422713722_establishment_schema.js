'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstablishmentSchema extends Schema {
  up () {
    this.create('establishments', (table) => {
      table.increments()
      table.text('establishment').notNullable()
      table.text('slug')
      table.boolean('status').notNullable().default(true)
table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table
      .integer('address_id')
      .unsigned()
      .references('id')
      .inTable('addresses')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('establishments')
  }
}

module.exports = EstablishmentSchema
