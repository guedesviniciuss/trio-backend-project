import { type Request, type Response } from 'express'
import { syncUseCase } from './syncFactory'

class SyncController {
  async handle (_request: Request, response: Response): Promise<Response> {
    const syncedContacts = await syncUseCase.execute()
    return response.json({ ...syncedContacts })
  }
}

export {
  SyncController
}
