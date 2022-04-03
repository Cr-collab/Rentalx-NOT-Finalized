import { container } from 'tsyringe'

import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository'
import { CategoriesRepository } from '../../modules/cars/infra/typeorm/repositories/CategoriesRepository'
import { SpecificationsRepository } from '../../modules/cars/infra/typeorm/repositories/SpecificationsRepository'

import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'
import { ISpecifactionRepository } from '../../modules/cars/repositories/ISpecifactionRepository'

import 'reflect-metadata'

//criando um container
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
)

container.registerSingleton<ISpecifactionRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
