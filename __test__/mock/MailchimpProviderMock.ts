import { type IMembers, type IMailchimpProvider } from '@/modules/contacts/sync/providers/MailchimpProvider/IMailchimpProvider'

class MailchimpProviderMock implements IMailchimpProvider {
  async createMembers (members: IMembers[]): Promise<any> {

  }
}

export {
  MailchimpProviderMock
}
