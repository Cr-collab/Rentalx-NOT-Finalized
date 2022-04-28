
import { CreateCarController } from '@modules/cars/useCases/CreateCar/CreateCarController'
import { CreateCarSpecificationController } from '@modules/cars/useCases/CreateCarSpecifaction/CreateCarSpecificationController'
import { ListCarsController } from '@modules/cars/useCases/ListCars/ListCarsController'
import { UploadCarImageController } from '@modules/cars/useCases/UploadCarImage/UploadCarImageController'
import { Router } from 'express'
import multer from 'multer'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import uploadConfig from '../../../../config/upload'
const carsRouter = Router()

const createCarsController = new CreateCarController()
const listCarsController = new ListCarsController()
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImageController();


const upload = multer(uploadConfig.upload("./tmp/cars"))

carsRouter.post('/',
  ensureAuthenticated,
  ensureAdmin,
  createCarsController.handle
)

carsRouter.get('/list', listCarsController.handle)

carsRouter.post('/specifications/:id', ensureAuthenticated, createCarSpecificationController.handle)

carsRouter.post('/images/:id', ensureAuthenticated, ensureAdmin, upload.array("images"), uploadCarImagesController.handle)
export { carsRouter }
