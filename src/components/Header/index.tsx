import Logo from '@/components/Icons/Logo'
import Menu from '@/components/Header/Menu'

export default function Header() {
  return (
    <nav className="flex items-center justify-between">
      <Logo />

      <Menu />
    </nav>
  )
}
