import Logo from '@/components/Icons/Logo'
import { Menu } from '@/components/Menu'
import { ItemType } from '@/type'
import { itemsMenu } from '@/utils'
import useUser from '@/hooks/useUser'

export default function Header() {
  const { user } = useUser()

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between">
      <Menu.Icon icon={Logo} />

      <Menu.Root>
        {itemsMenu.map((item: ItemType) => (
          <Menu.Item key={item.name} path={item.path} name={item.name} />
        ))}
        {user && <Menu.Item path={`/user`} name={user.name} />}
      </Menu.Root>
    </nav>
  )
}
