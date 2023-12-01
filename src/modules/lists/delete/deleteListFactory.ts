import { MailchimpProvider } from '@/modules/shared/providers/MailchimpProvider/MailchimpProvider'
import { DeleteListByNameUseCase } from './DeleteListByNameUseCase'
import { DeleteListByNameController } from './DeleteListByNameController'

// Initializing providers
const mailchimpProvider = new MailchimpProvider()

// Creating DeleteListByIdUseCase
const deleteListByNameUseCase = new DeleteListByNameUseCase(mailchimpProvider)

// Creating DeleteListByIdController
const deleteListByNameController = new DeleteListByNameController()

export {
  deleteListByNameUseCase,
  deleteListByNameController
}
