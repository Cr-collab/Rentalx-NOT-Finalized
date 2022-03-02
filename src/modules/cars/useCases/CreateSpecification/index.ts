import { SpecificationsRepository } from '../../repositories/SpecificationsRepository'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'
import { CreateSpecificationController } from './CreateSpecificationController'

const createSpecificationRepository = new SpecificationsRepository()

const createSpecificationUseCase = new CreateSpecificationUseCase(
  createSpecificationRepository,
)

const createSpecifications = new CreateSpecificationController(
  createSpecificationUseCase,
)

export { createSpecifications }
