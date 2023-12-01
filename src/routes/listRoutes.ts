import { deleteListByNameController } from '@/modules/lists/delete/deleteListFactory'
import { Router } from 'express'

const listRoutes = Router()

listRoutes.delete('/:listName', deleteListByNameController.handle)

export {
  listRoutes
}
