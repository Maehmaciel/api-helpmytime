'use strict'

const Route = use('Route')


Route.post('users', 'UserController.store')

Route.post('login', 'LoginController.store')

Route.post('forgotPassword', 'ForgotPasswordController.store')

Route.group(()=>{
//Route.resource('contact', 'UserContactController').apiOnly()
Route.get('users', 'UserController.show')
Route.resource('establishment', 'EstablishmentController').apiOnly()
//Route.resource('establishment.address', 'AddressController').apiOnly()
Route.resource('feature', 'FeatureController').apiOnly()
//Route.resource('establishment.contact', 'EstablishmentContactController').apiOnly()
Route.resource('service', 'ServiceController').apiOnly()
Route.resource('category', 'CategoryController').apiOnly()
Route.resource('schedule', 'ScheduleController').apiOnly()

}).middleware(['auth'])


