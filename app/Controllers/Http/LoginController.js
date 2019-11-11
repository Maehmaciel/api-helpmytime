'use strict'

class SessionLoginController {
    async store({ request , auth }){
        //request.all
        const { email, password } = request.all()
        const webToken = await auth.attempt(email, password)


        return webToken
    }
}

module.exports = SessionLoginController
