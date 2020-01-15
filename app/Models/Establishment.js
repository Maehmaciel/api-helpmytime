'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Establishment extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }
  features() {
    return this.belongsToMany('App/Models/Feature')

  }
  services() {
    return this.belongsToMany('App/Models/Service')

  }

  /* address () {
      return this.hasOne('App/Models/Address')
    }*/
}

module.exports = Establishment
