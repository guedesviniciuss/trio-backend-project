import { type Request, type Response } from 'express'
import { deleteListByNameUseCase } from './deleteListFactory'

class DeleteListByNameController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { listName } = request.params
    await deleteListByNameUseCase.execute(listName)
    return response.status(200).send()
  }
}

export {
  DeleteListByNameController
}
