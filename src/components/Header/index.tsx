import Logo from '@/components/Icons/Logo'
import { Menu } from '@/components/Menu'
import { ItemType } from '@/type'

export default function Header() {
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
    <nav className="mx-auto flex max-w-7xl items-center justify-between">
      <Menu.Icon icon={Logo} />

      <Menu.Root>
        {itemsMenu.map((item: ItemType) => (
          <Menu.Item key={item.name} path={item.path} name={item.name} />
        ))}
      </Menu.Root>
    </nav>
  )
}
