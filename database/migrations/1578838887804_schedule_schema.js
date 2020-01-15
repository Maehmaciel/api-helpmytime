'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScheduleSchema extends Schema {
  up () {
    this.create('schedules', (table) => {
      table.increments()
      table.time('time').notNullable()
      table.boolean('haveClient').notNullable().default(false)
      table.boolean('finished').notNullable().default(false)
      table.date('day').notNullable()
      table
      .integer('establishment_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('establishments')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('schedules')
  }
}

module.exports = ScheduleSchema
