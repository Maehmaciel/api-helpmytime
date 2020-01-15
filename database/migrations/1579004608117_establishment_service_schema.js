'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstablishmentServiceSchema extends Schema {
  up () {
    this.create('establishment_service', (table) => {
      table.increments()
      table
      .integer('establishment_id')
      .unsigned()
      .references('establishments.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .index('establishment_service_id')

    table
      .integer('service_id')
      .unsigned()
      .references('services.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .index('service_establishment_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('establishment_service')
  }
}

module.exports = EstablishmentServiceSchema
