import { MockApiProvider } from '../../__mocks__/MockApiProvider'
import { MailchimpProvider } from '../../__mocks__/MailchimpProvider'
import { contactList } from '../../__mocks__/mockApiContactListFactory'
import { SyncUseCase } from '@/modules/contacts/sync/SyncUseCase'
import AppError from '@/infra/errors/AppError'
import { type IListContacts } from '@/modules/contacts/sync/providers/MockApi/IMockApiProvider'
import { randomBytes } from 'node:crypto'

describe('SyncUseCase', () => {
  const listName = randomBytes(10).toString('hex') // Random listName

  it('should throw error when mock api returns undefined list', async () => {
    // Given
    const listsSuccessResponse = {
      lists: []
    } as any // TODO: type this objects

    const mockApiProvider = new MockApiProvider()
    const mailchimpProvider = new MailchimpProvider(listsSuccessResponse)
    const underTest = new SyncUseCase(mockApiProvider, mailchimpProvider, listName)

    // When
    await underTest.execute().catch(error => {
      // Then
      expect(error).toBeInstanceOf(AppError)
      expect(error).toHaveProperty('statusCode', 400)
    })
  })

  it('should throw error when mock api returns empty list', async () => {
    // Given
    const listsSuccessResponse = {
      lists: []
    } as any // TODO: type this objects

    const emptyList: IListContacts[] = []

    const mockApiProvider = new MockApiProvider(emptyList)
    const mailchimpProvider = new MailchimpProvider(listsSuccessResponse)
    const underTest = new SyncUseCase(mockApiProvider, mailchimpProvider, listName)

    // When
    await underTest.execute().catch(error => {
      // Then
      expect(error).toBeInstanceOf(AppError)
      expect(error).toHaveProperty('statusCode', 400)
    })
  })

  it('should return the number of synced contacts and contact list', async () => {
    // Given
    const listsSuccessResponse = {
      lists: []
    } as any // TODO: type this objects

    const mockApiProvider = new MockApiProvider(contactList)
    const mailchimpProvider = new MailchimpProvider(listsSuccessResponse)
    const underTest = new SyncUseCase(mockApiProvider, mailchimpProvider, listName)

    const contacts = await underTest.execute()

    // When
    expect(contacts).toHaveProperty('syncedContacts')
    expect(contacts).toHaveProperty('contacts')
    expect(contacts.syncedContacts).toBe(4)
  })
})
