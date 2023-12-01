import { randomBytes } from 'node:crypto'
import { type IMailchimpProvider } from '@/modules/shared/providers/MailchimpProvider/IMailchimpProvider'
import { type lists } from '@mailchimp/mailchimp_marketing'

class MailchimpProvider implements IMailchimpProvider {
  constructor (private readonly listsSuccessResponse: lists.ListsSuccessResponse) {}

  async createMembers (_listId: string, members: lists.BatchListMembersBodyMembersObject[]) {
    return {
      new_members: members,
      updated_members: [],
      total_created: members.length,
      total_updated: 0
    }
  }

  async createList (listName: string) {
    const id = randomBytes(10).toString('hex') // Random id (string - length 10)

    const lists = this.listsSuccessResponse.lists

    const listToInsert = {
      id,
      name: listName
    }

    this.listsSuccessResponse.lists = [...lists, listToInsert as lists.List]

    return id
  }

  async getListIdByName (listName: string) {
    const { lists } = this.listsSuccessResponse
    const list = lists.find(list => list.name === listName)

    if (!list) return

    const { id } = list

    return id
  }

  async deleteListById (id: string) {
    const lists = this.listsSuccessResponse.lists.filter(list => list.id !== id)
    this.listsSuccessResponse.lists = [...lists]
  }
}

export {
  MailchimpProvider
}
