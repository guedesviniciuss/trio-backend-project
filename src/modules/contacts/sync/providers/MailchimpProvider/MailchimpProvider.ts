import { type IMailchimpProvider, type IMembers } from './IMailchimpProvider'
// import { mailchimp } from './utils/mailchimpConfig'

class MailchimpProvider implements IMailchimpProvider {
  async createMembers (members: IMembers[]) {
    // const response = await mailchimp.lists.createList()
    // console.log(response)
  }
}

export {
  MailchimpProvider
}
