import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type AlternativeProps = {
  children: ReactNode
}

export default function AlternativeLayout({ children }: AlternativeProps) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="bg-black p-4 text-white">
        <Header />
      </header>

      <main>{children}</main>

      <Footer />
    </div>
  )
}
