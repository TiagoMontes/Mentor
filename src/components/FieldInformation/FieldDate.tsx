import { ReactNode } from 'react'

type FieldDateProps = {
  children: ReactNode
}

export default function FieldDate({ children }: FieldDateProps) {
  return <span className="text-sm text-gray-300">{children}</span>
}
