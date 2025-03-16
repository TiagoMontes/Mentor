import { ReactNode } from 'react'

type FieldDescriptionProps = {
  children: ReactNode
}

export default function FieldDescription({ children }: FieldDescriptionProps) {
  return <p className="text-gray-200 leading-relaxed">{children}</p>
}
