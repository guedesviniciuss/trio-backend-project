import { type IListContacts, type IMockApiProvider } from '@/modules/contacts/sync/providers/MockApi/IMockApiProvider'

class ApiProviderMock implements IMockApiProvider {
  private readonly contactList: IListContacts[] | undefined

  constructor (contactList: IListContacts[] | undefined) {
    this.contactList = contactList
  }

  async listContacts (): Promise<IListContacts[] | undefined> {
    return this.contactList
  }
}

export {
  ApiProviderMock
}
