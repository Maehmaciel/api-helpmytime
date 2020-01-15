'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstablishmentFeatureSchema extends Schema {
  up () {
    this.create('establishment_feature', (table) => {
      table.increments()
      table
      .integer('establishment_id')
      .unsigned()
      .references('establishments.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .index('establishment_feature_id')

    table
      .integer('feature_id')
      .unsigned()
      .references('features.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .index('feature_establishment_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('establishment_feature')
  }
}

module.exports = EstablishmentFeatureSchema
