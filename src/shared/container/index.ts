import { container } from 'tsyringe'

import { UsersRepository } from '../../modules/accounts/repositories/UsersRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/CategoriesRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/SpecificationsRepository'

import { IUsersRepository } from '../../modules/accounts/repositories/implementations/IUsersRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/implementations/ICategoriesRepository'
import { ISpecifactionRepository } from '../../modules/cars/repositories/implementations/ISpecifactionRepository'

//criando um container
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
)

container.registerSingleton<ISpecifactionRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)
