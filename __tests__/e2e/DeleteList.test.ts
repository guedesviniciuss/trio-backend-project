import request from 'supertest'
import { randomBytes } from 'node:crypto'
import { MailchimpProvider } from '@/modules/shared/providers/MailchimpProvider/MailchimpProvider'
import { app } from '@/app'
import { env } from '@/infra/environment'

const { MAILCHIMP_LIST_NAME } = env

describe('[DELETE] /list/{listName}', () => {
  beforeEach(async () => {
    const mailchimpProvider = new MailchimpProvider()
    const listId = await mailchimpProvider.getListIdByName(MAILCHIMP_LIST_NAME)

    if (listId) {
      await mailchimpProvider.deleteListById(listId)
    }
  })

  it('[DELETE] /list/{listName} (delete an existent list)', async () => {
    // Given
    const mailchimpProvider = new MailchimpProvider()

    await mailchimpProvider.createList(MAILCHIMP_LIST_NAME)

    // When
    const response = await request(app)
      .delete(`/list/${MAILCHIMP_LIST_NAME}`)

    // Then
    expect(response.status).toBe(200)
  })

  it.skip('[DELETE] /list/{listName} (delete an non existent list)', async () => {
    // Given
    const listName = randomBytes(10).toString('hex') // Random listName

    // When
    const response = await request(app)
      .delete(`/list/${listName}`)

    // Then
    expect(response.status).toBe(200)
  })
})
