import { Router } from 'express'
import { authenticateRoutes } from './authenticate.routes'
import { carsRouter } from './cars.routes'
import { categoriesRoutes } from './categories.routes'
import { specificationRoutes } from './specifiaction.routes'
import { usersRoutes } from './users.routes'

const router = Router()

router.use('/categories', categoriesRoutes)
router.use('/specifications', specificationRoutes)
router.use('/users', usersRoutes)
router.use('/cars', carsRouter)
router.use(authenticateRoutes)

export { router }
