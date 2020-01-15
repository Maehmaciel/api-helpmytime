'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoryServiceSchema extends Schema {
  up () {
    this.create('category_service', (table) => {
      table.increments()
      table
      .integer('category_id')
      .unsigned()
      .references('categories.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .index('category_id')

    table
      .integer('service_id')
      .unsigned()
      .references('services.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .index('service_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('category_service')
  }
}

module.exports = CategoryServiceSchema
