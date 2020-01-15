'use strict'
const Feature = use('App/Models/Feature')

class FeatureController {

  async index({ request, response, view }) {
    const feature = await Feature.query().with('establishments').fetch()

    return feature

  }

  async store({ request, response }) {

    const featureData = request.only(['feature'])
    const feature = await Feature.create(featureData)

    return feature
  }

  async show({ params, request, response, view }) {
    try {
      const feature = await Feature.findOrFail(params.id)
      await feature.load('establishments')
      return feature
    } catch (error) {

      return response.status(error.status).send({ 'erro': 'nao encontrado' })

    }

  }

  async update({ params, request, response }) {
    try {
      const feature = await Feature.findOrFail(params.id)
      const featureData = request.only(['feature'])
      feature.merge(featureData)
      await feature.save()


      return feature

    } catch (error) {
      return response.status(error.status).send({ 'erro': 'nao foi possivel atualizar' })
    }
  }


  async destroy({ params, request, response }) {
    try {
      const feature = await Feature.findOrFail(params.id)
      await feature.delete()
    } catch (error) {
      return response.status(error.status).send({ 'erro': 'nao foi possivel deletar' })
    }
  }
}

module.exports = FeatureController
