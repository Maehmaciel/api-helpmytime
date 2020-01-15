'use strict'

class SessionLoginController {
    async store({ response,request , auth }){
        try {
        const { email, password } = request.all()
        const webToken = await auth.attempt(email, password)


        return webToken 
        } catch (error) {
                return response.status(error.status).send({ error : 'Email ou senha Incorretos'})
            
        }
        
    }
}

module.exports = SessionLoginController
