import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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

      <Footer />
    </div>
  )
}
