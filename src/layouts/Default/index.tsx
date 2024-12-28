import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type DefaultProps = {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultProps) {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-white text-black">
      <header className="bg-black p-4 text-white">
        <Header />
      </header>
      <main className="mx-auto w-full max-w-7xl flex-grow px-4 py-4 lg:px-0">
        {children}
      </main>

      <footer className="bg-[#1F2937] py-4 text-[#9CA3AF]">
        <Footer />
      </footer>
    </div>
  )
}
