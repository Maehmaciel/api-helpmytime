'use strict'
const Service= use('App/Models/Service')
class ServiceController {
  
  async index ({ request, response, view }) {
    const service = await Service.query().with('establishments').with('categories').fetch()

    return service
  }


  async store ({ request, response }) {
    const {categories,...serviceData} = request.only(['name','description','price','duration','categories'])
    const service = await Service.create(serviceData)
      if(categories && categories.length>0){
        
        await service.categories().attach(categories)
        await service.load('categories')
      }

    return service
  }

  async show ({ params, request, response, view }) {
    try {
      const service = await Service.findOrFail(params.id)
      await service.load('establishments')
      await service.load('categories')
      return service
    } catch (error) {

      return response.status(error.status).send({ 'erro': 'nao encontrado' })

    }

  }



  async update ({ params, request, response }) {

    try {
      const service = await Service.findOrFail(params.id)
      const  {categories,...serviceData} = request.only(['name','description','price','duration','categories'])
      service.merge(serviceData)
      await service.save()

      if(categories && categories.length>0){
        
        await service.categories().sync(categories)
        await service.load('categories')
      }
      return service

    } catch (error) {
      return response.status(error.status).send({ 'erro': 'nao foi possivel atualizar' })
    }
  }


  async destroy ({ params, request, response }) {
    try {
      const service = await Service.findOrFail(params.id)
      await service.delete()
    } catch (error) {
      return response.status(error.status).send({ 'erro': 'nao foi possivel deletar' })
    }
  }
}

module.exports = ServiceController
