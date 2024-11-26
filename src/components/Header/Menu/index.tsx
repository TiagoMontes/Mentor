import Item from '@/components/Header/Item'
import { ItemType } from '@/type'

export default function Menu() {
  const itemsMenu: ItemType[] = [
    {
      name: 'Home',
      path: ''
    },
    {
      name: 'Settings',
      path: ''
    },
    {
      name: 'About',
      path: ''
    }
  ]

  return (
    <ul className="flex space-x-4">
      {itemsMenu.map((item, i) => (
        <Item name={item.name} path={'ola'} key={i} />
      ))}
    </ul>
  )
}
