import { type IMailchimpProvider } from './IMailchimpProvider'
import { client } from './utils/mailchimpConfig'

class MailchimpProvider implements IMailchimpProvider {
  async createList (listName: string) {
    // @ts-expect-error
    const { id } = await client.lists.createList({
      name: listName,
      permission_reminder: 'permission_reminder',
      email_type_option: true,
      contact: {
        company: 'Trio',
        address1: 'Remote',
        city: 'Boston',
        country: 'United States',
        state: 'massachusetts',
        zip: '60515'

      },
      campaign_defaults: {
        from_name: 'Trio',
        from_email: 'trio@dev.com',
        subject: 'Trio Backend Assignment',
        language: 'English'
      }
    })

    return id
  }

  async getListIdByName (listName: string) {
    const { lists } = await client.lists.getAllLists() as client.lists.ListsSuccessResponse
    const list = lists.find(list => list.name === listName)

    if (!list) return

    const { id } = list

    return id
  }

  async createMembers (listId: string, members: client.lists.BatchListMembersBodyMembersObject[]) {
    const createdMembers = await client.lists.batchListMembers(listId, {
      members,
      update_existing: true
    })

    return createdMembers
  }

  async deleteListById (id: string) {
    // @ts-expect-error
    await client.lists.deleteList(id)
  }
}

export { MailchimpProvider }
