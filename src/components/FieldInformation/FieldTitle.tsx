import { ReactNode } from 'react'

type FieldTitleProps = {
  children: ReactNode
}

export default function FieldTitle({ children }: FieldTitleProps) {
  return <h2 className="text-xl font-semibold text-white">{children}</h2>
}
