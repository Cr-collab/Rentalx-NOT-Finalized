import { Router } from 'express'
import multer from 'multer'
import { CreateCategoryController } from '../modules/cars/useCases/CreateCategory/CreateCategoryController'
import { importCategoryController } from '../modules/cars/useCases/ImportCategory'
import { listCategoriesController } from '../modules/cars/useCases/ListCategory'

const categoriesRoutes = Router()

const upload = multer({ dest: './tmp' })
const createCategoryController = new CreateCategoryController();
categoriesRoutes.post('/', createCategoryController.handle)

categoriesRoutes.get('/', (request, response) =>
  listCategoriesController.handle(request, response),
)

categoriesRoutes.post('/import', upload.single('file'), (request, response) =>
  importCategoryController.handle(request, response),
)

export { categoriesRoutes }
