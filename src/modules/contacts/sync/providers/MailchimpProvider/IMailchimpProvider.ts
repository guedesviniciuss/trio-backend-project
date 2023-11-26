interface IMembers {
  firstName: string
  lastName: string
  email: string
}

interface IMailchimpProvider {
  createMembers: (members: IMembers[]) => Promise<any>
}

export type {
  IMembers,
  IMailchimpProvider
}
