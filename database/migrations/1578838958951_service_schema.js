'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServiceSchema extends Schema {
  up () {
    this.create('services', (table) => {
      table.increments()
      table.text('name').notNullable()
      table.text('description').notNullable()
      table.decimal('price').notNullable()
      table.time('duration').notNullable()
      table
      .integer('address_id')
      .unsigned()
      .references('id')
      .inTable('addresses')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table
      .integer('schedule_id')
      .unsigned()
      .references('id')
      .inTable('schedules')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('services')
  }
}

module.exports = ServiceSchema
