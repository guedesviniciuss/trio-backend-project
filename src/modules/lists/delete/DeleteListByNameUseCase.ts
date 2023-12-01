import AppError from '@/infra/errors/AppError'
import logger from '@/infra/logger'
import { type IMailchimpProvider } from '@/modules/shared/providers/MailchimpProvider/IMailchimpProvider'

class DeleteListByNameUseCase {
  constructor (private readonly mailchimpProvider: IMailchimpProvider) {}

  async execute (listName: string) {
    logger.info('Requesting contacts from mock api')
    const listId = await this.mailchimpProvider.getListIdByName(listName)

    if (!listId) {
      logger.error(`List ${listName} not found`)
      throw new AppError(`List ${listName} not found`, 404)
    }

    logger.info(`Deleting list: ${listName} - ${listId} from mailchimp`)
    await this.mailchimpProvider.deleteListById(listId)
    logger.info('List deleted!')
  }
}

export {
  DeleteListByNameUseCase
}
