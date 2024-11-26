import { ReactNode } from "react"

type DefaultProps = {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultProps) {
  return (
    <div>
      <header>
        <nav>
          <h1>default</h1>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  )
}
