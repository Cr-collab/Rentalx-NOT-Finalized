import { Router } from 'express'
import { ensureAuthenticated } from '../shared/infra/http/middlewares/ensureAuthenticated'
import { CreateSpecificationController } from '../modules/cars/useCases/CreateSpecification/CreateSpecificationController'

const specificationRoutes = Router()

const createSpecificationController = new CreateSpecificationController()
specificationRoutes.use(ensureAuthenticated)
specificationRoutes.post('/', createSpecificationController.handle)

export { specificationRoutes }
