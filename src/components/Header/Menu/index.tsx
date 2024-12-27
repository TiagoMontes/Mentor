import Item from '@/components/Header/Item'
import { ItemType } from '@/type'

export default function Menu() {
  const itemsMenu: ItemType[] = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'User',
      path: '/user'
    },
    {
      name: 'About',
      path: '/about'
    }
  ]

  return (
    <ul className="flex space-x-4">
      {itemsMenu.map((item, i) => (
        <Item name={item.name} path={item.path} key={i} />
      ))}
    </ul>
  )
}
