'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.text('username').notNullable().unique()
      table.text('email').notNullable().unique()
      table.text('password').notNullable()
      table.boolean('confirmated').notNullable().defaultTo('false')
      table.boolean('provider').notNullable().defaultTo('false')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
