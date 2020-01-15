'use strict'
const Establishment = use('App/Models/Establishment')
class EstablishmentController {

  async index ({ request, response, view }) {
    const establishment = await Establishment.query().with('user')
    .with('features')
    .with('services')
    .fetch()
    
    return establishment


  }

  async show({params, request,response}){
    try {
       const establishment = await Establishment.findOrFail(params.id)
            await establishment.load('features')
            await establishment.load('services')
            return establishment
    } catch (error) {
      return response.status(error.status).send({'erro':'nao encontrado'})
    }
   
  }
  
  async store ({ request, response,auth }) {
   
      const {services,features,...establishmentData} = request.only(['establishment','slug', 'status','features','services'])
      const establishment = await Establishment.create({...establishmentData,user_id:auth.user.id})
      if(features && features.length>0){
        
        await establishment.features().attach(features)
        await establishment.load('features')
      }

      if(services && services.length>0){
        
        await establishment.services().attach(services)
        await establishment.load('services')
      }
      return establishment 
  
  
  }

  async update ({ params, request, response,auth }) {


    try {
      const establishment = await Establishment.findOrFail(params.id)
      const {services,features,...establishmentData} = request.only(['establishment','slug', 'status','features','services'])
      establishment.merge({...establishmentData,user_id:auth.user.id})
      await establishment.save()

      if(features && features.length>0){
      
        await establishment.features().sync(features)
        await establishment.load('features')
      }
      if(services && services.length>0){
        
        await establishment.services().sync(services)
        await establishment.load('services')
      }
      return establishment 
           
   } catch (error) {
     return response.status(error.status).send({'erro':'nao foi possivel atualizar'})
   }
    
  }

  
  async destroy ({ params, request, response }) {
    try {
      const establishment = await Establishment.findOrFail(params.id)
      await establishment.delete()
    } catch (error) {
      return response.status(error.status).send({'erro':'nao foi possivel deletar'})
    }
    
  }
}

module.exports = EstablishmentController
