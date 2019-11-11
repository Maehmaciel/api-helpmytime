'use strict'

const crypto = use('crypto')
const User = use('App/Models/User')

class ForgotPasswordController {
    async store({ request, response }){
    try {
        
            const email = request.input('email')
            const user = await User.findByOrFail('email', email)
            const token = crypto.randonBytes(10).toString('hex')
    }
    catch (erro) {
        return response.status(erro.status).send({ error : 'Houston, we have a problem'})
    }
    
 } 
    
}

module.exports = ForgotPasswordController
