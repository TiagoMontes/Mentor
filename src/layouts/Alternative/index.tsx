import { ReactNode } from "react"

type AlternativeProps = {
  children: ReactNode
}

export default function AlternativeLayout({ children }: AlternativeProps) {
  return (
    <div className="bg-black text-white h-screen">
      <header>
        <nav>
          <h1>Alternative</h1>
          <ul>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  )
}
