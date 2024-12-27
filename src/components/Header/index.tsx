import Logo from '@/components/Icons/Logo'
import Menu from '@/components/Header/Menu'

export default function Header() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between">
      <Logo />

      <Menu />
    </nav>
  )
}
