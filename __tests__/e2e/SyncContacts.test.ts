import { app } from '@/app'
import { env } from '@/infra/environment'
import { MailchimpProvider } from '@/modules/shared/providers/MailchimpProvider/MailchimpProvider'
import request from 'supertest'

const { MAILCHIMP_LIST_NAME } = env

describe('[GET] /contacts/sync', () => {
  beforeEach(async () => {
    const mailchimpProvider = new MailchimpProvider()
    const listId = await mailchimpProvider.getListIdByName(MAILCHIMP_LIST_NAME)

    if (listId) {
      await mailchimpProvider.deleteListById(listId)
    }
  })

  it('[GET] /contacts/sync (create and sync)', async () => {
    const response = await request(app)
      .get('/contacts/sync')

    expect(response.status).toBe(200)
    expect(JSON.parse(response.text)).toHaveProperty('syncedContacts')
    expect(JSON.parse(response.text)).toHaveProperty('contacts')
  })

  it('[GET] /contacts/sync (sync in a existent list)', async () => {
    await request(app)
      .get('/contacts/sync')

    const response = await request(app)
      .get('/contacts/sync')

    expect(response.status).toBe(200)
    expect(JSON.parse(response.text)).toHaveProperty('syncedContacts')
    expect(JSON.parse(response.text)).toHaveProperty('contacts')
  })
})
