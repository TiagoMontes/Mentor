import { ReactNode } from 'react'

type MenuRootProps = {
  children: ReactNode
}

export default function MenuRoot({ children }: MenuRootProps) {
  return <div className="flex space-x-4">{children}</div>
}
