import { Router } from 'express'
import multer from 'multer'
import { CreateCategoryController } from '../modules/cars/useCases/CreateCategory/CreateCategoryController'
import { ImportCategoryController } from '../modules/cars/useCases/ImportCategory/ImportCategoryController'
import { ListCategoryController } from '../modules/cars/useCases/ListCategory/ListCategoryController'

const categoriesRoutes = Router()

const upload = multer({ dest: './tmp' })

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController()
const listCategoriesController = new ListCategoryController();

categoriesRoutes.post('/', createCategoryController.handle)

categoriesRoutes.get('/', listCategoriesController.handle,)

categoriesRoutes.post('/import', upload.single('file'), importCategoryController.handle)

export { categoriesRoutes }
