import { MailchimpProvider } from './MailchimpProvider/MailchimpProvider'
import { MockApiProvider } from './MockApi/MockApiProvider'
import { SyncUseCase } from '../SyncUseCase'
import { SyncController } from '../SyncController'

// Initializing providers
const mailchimpProvider = new MailchimpProvider()
const mockApiProvider = new MockApiProvider()

// Creating SyncUseCase
const syncUseCase = new SyncUseCase(mockApiProvider, mailchimpProvider)

// Creating SyncController
const syncController = new SyncController()

export {
  syncController,
  syncUseCase
}
