'use strict'
const Category = use('App/Models/Category')
class CategoryController {

  async index ({ request, response, view }) {
    const category = await Category.all()

    return category

  }




  async store ({ request, response }) {
    const categoryData = request.only(['category','slug','rank'])
    const category = await Category.create(categoryData)

    return category
  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = CategoryController
