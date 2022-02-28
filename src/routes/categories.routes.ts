import { Router } from 'express'
import { CategoryRepository } from '../modules/cars/repositories/CategoryRepository'
import { CreateCategoryServices } from '../modules/cars/services/CreateCategoryServices'

const categoriesRoutes = Router()

const categoriesRepository = new CategoryRepository()

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const createCategoryService = new CreateCategoryServices(categoriesRepository)
  createCategoryService.execute({ name, description })
  return response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRepository.list()

  return response.json({ all })
})

export { categoriesRoutes }
