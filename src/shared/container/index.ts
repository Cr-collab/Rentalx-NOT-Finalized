import { container } from 'tsyringe'
import { CategoriesRepository } from '../../modules/cars/repositories/CategoryRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/implementations/ICategoriesRepository'

//craiando um container
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)
