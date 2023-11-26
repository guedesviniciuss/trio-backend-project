import { api } from '@/modules/shared/api'
import { type IMockApiProvider, type IResponseListContacts } from './IMockApiProvider'

class MockApiProvider implements IMockApiProvider {
  async listContacts () {
    const { data } = await api.get<IResponseListContacts[]>('/api/v1/contacts')

    return data
  }
}

export {
  MockApiProvider
}
