import { randomBytes } from 'node:crypto'
import { DeleteListByNameUseCase } from '@/modules/lists/delete/DeleteListByNameUseCase'
import { type IMailchimpProvider } from '@/modules/shared/providers/MailchimpProvider/IMailchimpProvider'
import { MailchimpProvider } from '../../__mocks__/MailchimpProvider'
import AppError from '@/infra/errors/AppError'

describe('Delete list members on mailchimp', () => {
  let mailchimpProvider: IMailchimpProvider
  let underTest: DeleteListByNameUseCase

  beforeEach(() => {
    const listsSuccessResponse = {
      lists: []
    } as any // TODO: type this objects

    mailchimpProvider = new MailchimpProvider(listsSuccessResponse)
    underTest = new DeleteListByNameUseCase(mailchimpProvider)
  })

  it('should be able to delete a existent list', async () => {
    // Given
    const listName = randomBytes(10).toString('hex') // Random listName
    await mailchimpProvider.createList(listName)

    // When
    await underTest.execute(listName)
    const listId = await mailchimpProvider.getListIdByName(listName)

    // Then
    expect(listId).toBeUndefined()
  })

  it('should not be able to delete an non existent list', async () => {
    // Given
    const listName = randomBytes(10).toString('hex') // Random listName

    // When
    await underTest.execute(listName).catch(error => {
      // Then
      expect(error).toBeInstanceOf(AppError)
      expect(error).toHaveProperty('statusCode', 404)
    })
  })
})
