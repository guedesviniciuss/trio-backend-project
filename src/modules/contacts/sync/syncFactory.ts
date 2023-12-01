import { MailchimpProvider } from '../../shared/providers/MailchimpProvider/MailchimpProvider'
import { MockApiProvider } from './providers/MockApi/MockApiProvider'
import { SyncUseCase } from './SyncUseCase'
import { SyncController } from './SyncController'
import { env } from '@/infra/environment'

const { MAILCHIMP_LIST_NAME } = env

// Initializing providers
const mailchimpProvider = new MailchimpProvider()
const mockApiProvider = new MockApiProvider()

// Creating SyncUseCase
const syncUseCase = new SyncUseCase(mockApiProvider, mailchimpProvider, MAILCHIMP_LIST_NAME)

// Creating SyncController
const syncController = new SyncController()

export {
  syncController,
  syncUseCase
}
