'use strict'
const User = use('App/Models/User')
class UserController {
    async show({response,request, auth}){
    
            const user = await User.findOrFail(auth.user.id)
            await user.establishments().fetch()
            return user
       
        
    }
    async store({response,request}){
        
            const userData = request.only(['username','email','password'])
            const user = await User.create(userData)
    
            return user 
       
        
    }
}

module.exports = UserController
