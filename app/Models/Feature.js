'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Feature extends Model {
    establishments () {
        return this.belongsToMany('App/Models/Establishment')
        
      }
}

module.exports = Feature
