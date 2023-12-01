import { Router } from 'express'
import { syncRoutes } from './contactsRoutes'
import { listRoutes } from './listRoutes'

const routes = Router()

routes.use('/contacts', syncRoutes)
routes.use('/list', listRoutes)

export {
  routes
}
