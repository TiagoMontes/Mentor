import { ReactNode } from 'react'
import Header from '@/components/Header'

type DefaultProps = {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <header className="bg-black p-4 text-white">
        <Header />
      </header>

      <main>{children}</main>

      <footer className="mt-auto bg-gray-800 py-4">
        <p className="text-center text-sm text-gray-400">
          © 2024 Mentor. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
