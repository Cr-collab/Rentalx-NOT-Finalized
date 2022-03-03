import { CategoryRepository } from '../../repositories/CategoryRepository'
import { ListCategoryController } from './ListCategoryController'
import { ListCategoryUseCase } from './ListCategoryUseCase'

const categoriesRepository = null

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository)

const listCategoriesController = new ListCategoryController(listCategoryUseCase)

export { listCategoriesController }
