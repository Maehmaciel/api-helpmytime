'use strict'

const UserHook = exports = module.exports = {}
const crypto = use('crypto')
const Mail = use('Mail')
const Hash = use('Hash')
UserHook.sendValidationEmail= async (userInstance) => {
    const { email } = userInstance
    const token = crypto.randomBytes(10).toString('hex')
    await Mail.send(
        //resources/views/emails
        ['emails.validateEmail', 'emails.validateEmail_txt'],
        { email, token, url: `https://www.google.com.br?token=${token}` },
        message=>{
            message.
            to(email).
            from('mariaeugeniamaciel@gmail.com', 'Help my time').
            subject('email validate')
        }
    )
}

UserHook.hashPassword= async (userInstance) => {
    //dirty - se foi alterada
    if (userInstance.dirty.password) {
    userInstance.password = await Hash.make(userInstance.password)
    }
    
}
