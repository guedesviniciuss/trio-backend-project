import { syncController } from '@/modules/contacts/sync/providers/syncFactory'
import { Router } from 'express'

const syncRoutes = Router()

syncRoutes.get('/sync', syncController.handle)

export {
  syncRoutes
}
