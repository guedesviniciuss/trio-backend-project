import { SyncUseCase } from '@/modules/contacts/sync/SyncUseCase'
import { ApiProviderMock } from '../mock/ApiProviderMock'
import { MailchimpProviderMock } from '../mock/MailchimpProviderMock'
import { contactList, emptyContactList, noContent } from '../mock/ContactListFactory'
import AppError from '@/infra/errors/AppError'

describe('SyncUseCase', () => {
  it('should return the number of synced contacts and contact list', async () => {
    // Given
    const mockApiProviderMock = new ApiProviderMock(contactList)
    const mailchimpProvider = new MailchimpProviderMock()
    const underTest = new SyncUseCase(mockApiProviderMock, mailchimpProvider)

    const syncedContacts = await underTest.execute()
    // When
    // Then
    expect(syncedContacts).toHaveProperty('syncedContacts')
    expect(syncedContacts).toHaveProperty('contacts')
  })

  it('should throw error when mock api returns empty list', async () => {
    // Given
    const mockApiProviderMock = new ApiProviderMock(emptyContactList)
    const mailchimpProvider = new MailchimpProviderMock()
    const underTest = new SyncUseCase(mockApiProviderMock, mailchimpProvider)

    // When
    await underTest.execute().catch(error => {
    // Then
      expect(error).toBeInstanceOf(AppError)
      expect(error).toHaveProperty('statusCode', 400)
    })
  })

  it('should throw error when mock api returns undefined', async () => {
    // Given
    const mockApiProviderMock = new ApiProviderMock(noContent)
    const mailchimpProvider = new MailchimpProviderMock()
    const underTest = new SyncUseCase(mockApiProviderMock, mailchimpProvider)
    // When
    await underTest.execute().catch(error => {
      // Then
      expect(error).toBeInstanceOf(AppError)
      expect(error).toHaveProperty('statusCode', 400)
    })
  })
})
