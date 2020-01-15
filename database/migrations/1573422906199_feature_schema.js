'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FeatureSchema extends Schema {
  up () {
    this.create('features', (table) => {
      table.increments()
      table.text('feature').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('features')
  }
}

module.exports = FeatureSchema
