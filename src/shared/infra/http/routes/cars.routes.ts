import { CreateCarController } from '@modules/cars/useCases/CreateCar/CreateCarController'
import { CreateCarSpecificationController } from '@modules/cars/useCases/CreateCarSpecifaction/CreateCarSpecificationController'
import { ListCarsController } from '@modules/cars/useCases/ListCars/ListCarsController'
import { Router } from 'express'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const carsRouter = Router()

const createCarsController = new CreateCarController()
const listCarsController = new ListCarsController()
const createCarSpecificationController = new CreateCarSpecificationController();

carsRouter.post('/',
  ensureAuthenticated,
  ensureAdmin,
  createCarsController.handle
)

carsRouter.get('/list', listCarsController.handle)

carsRouter.post('/specifications/:id', ensureAuthenticated, createCarSpecificationController.handle)

export { carsRouter }
