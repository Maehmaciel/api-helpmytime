'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */


class User extends Model {
  static boot () {
    super.boot()

    //Hooks/UserHook

    //hash password before create and before update
    this.addHook('beforeSave', 'UserHook.hashPassword')

    //send email just after create
    this.addHook('afterCreate', 'UserHook.sendValidationEmail')
  }


  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
