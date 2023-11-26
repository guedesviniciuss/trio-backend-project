import { Router } from 'express'
import { syncRoutes } from './contactsRoutes'

const routes = Router()

routes.use('/contacts', syncRoutes)

export {
  routes
}
