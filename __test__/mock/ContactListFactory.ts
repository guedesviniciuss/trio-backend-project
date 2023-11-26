import { type IListContacts } from '@/modules/contacts/sync/providers/MockApi/IMockApiProvider'

const contactList: IListContacts[] = [
  {
    id: '115',
    firstName: 'Michelle',
    lastName: 'Gaylord',
    email: 'Kirk.Fritsch53@outlook.com',
    avatar: 'https://cdn.fakercloud.com/avatars/dshster_128.jpg',
    createdAt: '2022-02-18T16:32:23.057Z'
  },
  {
    id: '116',
    firstName: 'Deborah',
    lastName: 'Schinner',
    email: 'Corbin.Abshire700@icloud.com',
    avatar: 'https://cdn.fakercloud.com/avatars/spacewood__128.jpg',
    createdAt: '2022-02-18T18:09:28.068Z'
  },
  {
    id: '117',
    firstName: 'Jessika',
    lastName: 'Auer',
    email: 'Dillon651@gmail.com',
    avatar: 'https://cdn.fakercloud.com/avatars/xalionmalik_128.jpg',
    createdAt: '2022-02-18T16:41:12.035Z'
  },
  {
    id: '118',
    firstName: 'Geo',
    lastName: 'Schmitt',
    email: 'Cierra_Walsh352@outlook.com',
    avatar: 'https://cdn.fakercloud.com/avatars/sircalebgrove_128.jpg',
    createdAt: '2022-02-18T15:13:59.635Z'

  }]

const emptyContactList: IListContacts[] = []

const noContent = undefined

export {
  contactList,
  emptyContactList,
  noContent
}
