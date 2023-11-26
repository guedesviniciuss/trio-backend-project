import express, { type Request, type Response, type NextFunction } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '@/infra/docs/swagger.json'
import AppError from '@/infra/errors/AppError'
import { routes } from '@/routes'

const app = express()

app.use(express.json())

app.use('/', routes)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Async errors
app.use(
  (err: Error, _request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response
        .status(err.statusCode)
        .json({ status: 'error', message: err.message })
    }

    return response
      .status(500)
      .json({ status: 'error', message: 'Internal server error' })
  }
)

export { app }
