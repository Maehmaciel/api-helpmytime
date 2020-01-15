'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Service extends Model {
    establishments () {
        return this.belongsToMany('App/Models/Establishment')
        
      }

      categories () {
        return this.belongsToMany('App/Models/Category')
        
      }

}

module.exports = Service
