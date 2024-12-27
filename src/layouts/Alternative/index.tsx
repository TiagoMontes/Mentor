import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type AlternativeProps = {
  children: ReactNode
}

export default function AlternativeLayout({ children }: AlternativeProps) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="bg-gray-700 p-4 text-white">
        <Header />
      </header>

      <main className="mx-auto w-full max-w-7xl flex-grow px-4 py-4 lg:px-0">
        {children}
      </main>

      <Footer />
    </div>
  )
}
