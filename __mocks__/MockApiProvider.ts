import { type IListContacts, type IMockApiProvider } from '@/modules/contacts/sync/providers/MockApi/IMockApiProvider'

class MockApiProvider implements IMockApiProvider {
  constructor (private readonly contactList?: IListContacts[]) {
    this.contactList = contactList
  }

  async listContacts () {
    return this.contactList
  }
}

export {
  MockApiProvider
}
