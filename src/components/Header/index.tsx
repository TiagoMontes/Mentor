import Logo from '@/components/Icons/Logo'
import { Menu } from '@/components/Menu'
import { ItemType } from '@/type'
import { itemsMenu } from '@/lib/utils'

export default function Header() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between">
      <Menu.Icon icon={Logo} />

      <Menu.Root>
        {itemsMenu.map((item: ItemType) => (
          <Menu.Item key={item.name} path={item.path} name={item.name} />
        ))}
        <Menu.Item path="/login" name="Login" />
      </Menu.Root>
    </nav>
  )
}
