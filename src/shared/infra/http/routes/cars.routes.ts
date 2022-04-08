import { CreateCarController } from '@modules/cars/useCases/CreateCar/CreateCarController'
import { Router } from 'express'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const carsRouter = Router()

const createCarsController = new CreateCarController()

carsRouter.post('/',
  ensureAuthenticated,
  ensureAdmin,
  createCarsController.handle
)

export { carsRouter }
