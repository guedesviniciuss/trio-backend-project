import { api } from '@/modules/shared/api'
import { type IMockApiProvider, type IListContacts } from './IMockApiProvider'

class MockApiProvider implements IMockApiProvider {
  async listContacts () {
    const { data } = await api.get<IListContacts[]>('/api/v1/contacts')

    return data
  }
}

export {
  MockApiProvider
}
