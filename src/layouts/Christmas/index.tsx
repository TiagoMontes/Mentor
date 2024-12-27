import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

type DefaultProps = {
  children: ReactNode
}

export default function Christmas({ children }: DefaultProps) {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-white text-black">
      <header className="bg-christmas p-4 text-white">
        <Header />
      </header>

      <main className="mx-auto w-full max-w-7xl flex-grow px-4 py-4 lg:px-0">
        {children}
      </main>

      <footer className="bg-christmas relative py-4 text-white">
        <Image
          src="/img/santa.png"
          alt="santa claus"
          width={300}
          height={400}
          quality={75}
          className="absolute top-[-200px]"
        />
        <Footer />
      </footer>
    </div>
  )
}
