import { ReactNode } from 'react'

type FieldRootProps = {
  children: ReactNode
}

export default function FieldRoot({ children }: FieldRootProps) {
  return (
    <div className="bg-gray-700 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
      {children}
    </div>
  )
}
