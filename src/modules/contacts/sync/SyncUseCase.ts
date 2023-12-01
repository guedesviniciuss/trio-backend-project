import AppError from '@/infra/errors/AppError'
import { type IMockApiProvider } from './providers/MockApi/IMockApiProvider'
import { type IMailchimpProvider } from '@/modules/shared/providers/MailchimpProvider/IMailchimpProvider'
import { formatMembersFromMockApi } from '@/modules/shared/providers/utils/formatMembersFromMockApi'
import logger from '@/infra/logger'

class SyncUseCase {
  constructor (
    private readonly mockApiProvider: IMockApiProvider,
    private readonly mailchimpProvider: IMailchimpProvider,
    private readonly mailchimpListName: string) {}

  async execute () {
    logger.info('Requesting contacts from mock api')
    const listMembersFromMockApi = await this.mockApiProvider.listContacts()

    if (!Array.isArray(listMembersFromMockApi) || listMembersFromMockApi?.length === 0) {
      logger.warn('List members from mock api is empty')
      throw new AppError('List members from mock api is empty, try again later', 400)
    }

    logger.info(`Finding list id by name: ${this.mailchimpListName}`)
    let listId = await this.mailchimpProvider.getListIdByName(this.mailchimpListName)

    if (!listId) {
      logger.info('List id not found, creating members\' list on Mailchimp')
      listId = await this.mailchimpProvider.createList(this.mailchimpListName)
    }

    const formatedMembersFromMockApi = formatMembersFromMockApi(listMembersFromMockApi)

    logger.info('Syncronizing members from mock api on mailchimp')
    const {
      new_members: newMembers,
      updated_members: updatedMembers,
      total_created: totalCreated,
      total_updated: totalUpdated
    } = await this.mailchimpProvider.createMembers(listId, formatedMembersFromMockApi)

    // total synced contacts
    const totalSyncedContacts = totalCreated + totalUpdated

    // list of synced contacts from mailchimp
    const syncedContacts = [...newMembers, ...updatedMembers]

    logger.info('Formatting contacts')
    const formattedContacts = syncedContacts.map(syncedContact => ({
      firstName: syncedContact.merge_fields.FNAME,
      lastName: syncedContact.merge_fields.LNAME,
      email: syncedContact.email_address
    }))

    const contacts = {
      syncedContacts: totalSyncedContacts,
      contacts: formattedContacts
    }

    logger.info('Contacts synced successfully')
    return contacts
  }
}

export {
  SyncUseCase
}
