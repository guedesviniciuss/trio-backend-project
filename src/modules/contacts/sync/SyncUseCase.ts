import AppError from '@/infra/errors/AppError'
import { type IMailchimpProvider } from './providers/MailchimpProvider/IMailchimpProvider'
import { type IMockApiProvider } from './providers/MockApi/IMockApiProvider'

class SyncUseCase {
  constructor (private readonly mockApiProvider: IMockApiProvider, private readonly mailchimpProvider: IMailchimpProvider) {
    this.mockApiProvider = mockApiProvider
    this.mailchimpProvider = mailchimpProvider
  }

  async execute () {
    const listMembersFromMockApi = await this.mockApiProvider.listContacts()

    if (!listMembersFromMockApi?.length) {
      throw new AppError('List members from mock api is empty, try again later', 400)
    }

    const syncedContacts = {
      syncedContacts: 1,
      contacts: [
        {
          firstName: 'Amelia',
          lastName: 'Earhart',
          email: 'amelia_earhart@gmail.com'
        }
      ]
    }

    return syncedContacts
  }
}

export {
  SyncUseCase
}
