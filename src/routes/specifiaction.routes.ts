import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { createSpecifications } from '../modules/cars/useCases/CreateSpecification'

const specificationRoutes = Router()

const specificationRepository = new SpecificationsRepository()

specificationRoutes.post('/', (request, response) =>
  createSpecifications.handle(request, response),
)

export { specificationRoutes }
