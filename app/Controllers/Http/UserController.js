'use strict'
const User = use('App/Models/User')
class UserController {
    async store({request}){
        //request.all
        const userData = request.only(['username','email','password'])
        const user = await User.create(userData)

        return user
    }
}

module.exports = UserController
