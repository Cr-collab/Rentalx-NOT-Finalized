import { CreateCarController } from '@modules/cars/useCases/CreateCar/CreateCarController'
import { Router } from 'express'

const carsRouter = Router()

const createCarsController = new CreateCarController()

carsRouter.post('/', createCarsController.handle)

export { carsRouter }
