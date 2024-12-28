import { ReactNode } from 'react'

type MenuRootProps = {
  children: ReactNode
}

export default function MenuRoot({ children }: MenuRootProps) {
  return <ul className="flex space-x-4">{children}</ul>
}
