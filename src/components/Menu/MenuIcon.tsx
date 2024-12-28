import { ElementType } from 'react'

type MenuIconProps = {
  icon: ElementType
}

export default function MenuIcon({ icon: Icon }: MenuIconProps) {
  return <Icon />
}
