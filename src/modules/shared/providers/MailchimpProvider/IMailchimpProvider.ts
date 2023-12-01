import { type lists } from '@mailchimp/mailchimp_marketing'

interface IMembers {
  firstName: string
  lastName: string
  email: string
}

interface IMailchimpProvider {
  createMembers: (listId: string, members: lists.BatchListMembersBodyMembersObject[]) => Promise<any>
  createList: (listName: string) => Promise<string>
  getListIdByName: (listName: string) => Promise<string | undefined>
  deleteListById: (id: string) => Promise<void>
}

export type {
  IMembers,
  IMailchimpProvider
}
