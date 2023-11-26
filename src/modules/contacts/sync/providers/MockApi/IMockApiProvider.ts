interface IListContacts {
  id: string
  createdAt: string
  firstName: string
  lastName: string
  email: string
  avatar: string
}

interface IMockApiProvider {
  listContacts: () => Promise<IListContacts[] | undefined>
}

export type {
  IListContacts,
  IMockApiProvider
}
