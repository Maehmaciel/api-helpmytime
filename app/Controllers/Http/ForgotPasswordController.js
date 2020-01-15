'use strict'

const crypto = use('crypto')
const User = use('App/Models/User')
const Mail = use('Mail')
class ForgotPasswordController {
    async store({ request, response }){
    try {
        
            const email = request.input('email')
            const user = await User.findByOrFail('email', email)
            const token = crypto.randomBytes(10).toString('hex')
            await Mail.send(
                //resources/views/emails
                ['passwords.forgot', 'passwords.forgot_txt'],
                { token, url: `https://www.google.com.br?token=${token}` },
                message=>{
                    message.
                    to(email).
                    from('mariaeugeniamaciel@gmail.com', 'Help my time').
                    subject('email validate')
                }
            )
    }
    catch (erro) {
        return response.status(erro.status).send({ error : 'Houston, we have a problem'})
    }
    
 } 
    
}

module.exports = ForgotPasswordController
