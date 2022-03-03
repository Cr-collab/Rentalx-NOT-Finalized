import { CategoryRepository } from '../../repositories/CategoryRepository'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'
import { CreateCategoryController } from './CreateCategoryController'

const categoriesRepository = CategoryRepository.getInstance()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
)

export { createCategoryController }
