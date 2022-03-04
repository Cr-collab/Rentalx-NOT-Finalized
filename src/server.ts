import express from 'express'
import { router } from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'

import './shared/container'
import './database';

const app = express()

app.use(express.json())

app.use('/api-swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.listen(3333, () => console.log('SERVER IS RUNNING PORT 3333'))
