import { ReactNode } from 'react'

type FieldHeaderProps = {
  children: ReactNode
}

export default function FieldHeader({ children }: FieldHeaderProps) {
  return (
    <div className="flex justify-between items-start mb-2"> {children}</div>
  )
}
