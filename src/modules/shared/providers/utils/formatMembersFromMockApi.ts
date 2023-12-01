import { type lists } from '@mailchimp/mailchimp_marketing'
import { type IMembers } from '../MailchimpProvider/IMailchimpProvider'

const formatMembersFromMockApi = (members: IMembers[]): lists.BatchListMembersBodyMembersObject[] => {
  const formattedMembers:
  lists.BatchListMembersBodyMembersObject[] = members.map(member => ({
    email_address: member.email,
    email_type: 'html',
    status: 'subscribed',
    merge_fields: {
      FNAME: member.firstName,
      LNAME: member.lastName
    }
  }
  ))

  return formattedMembers
}

export {
  formatMembersFromMockApi
}
