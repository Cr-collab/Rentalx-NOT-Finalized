import { container } from 'tsyringe'
import { CategoriesRepository } from '../../modules/cars/repositories/CategoriesRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/implementations/ICategoriesRepository'
import { ISpecifactionRepository } from '../../modules/cars/repositories/implementations/ISpecifactionRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/SpecificationsRepository'



//craiando um container
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<ISpecifactionRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
)
