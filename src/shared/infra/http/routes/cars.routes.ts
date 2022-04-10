import { CreateCarController } from '@modules/cars/useCases/CreateCar/CreateCarController'
import { ListCarsController } from '@modules/cars/useCases/ListCars/ListCarsController'
import { Router } from 'express'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const carsRouter = Router()

const createCarsController = new CreateCarController()
const listCarsController = new ListCarsController()

carsRouter.post('/',
  ensureAuthenticated,
  ensureAdmin,
  createCarsController.handle
)

carsRouter.get('/list', listCarsController.handle)

export { carsRouter }
