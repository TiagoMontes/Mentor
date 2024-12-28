import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer component', () => {
  it('deve renderizar o texto esperado', () => {
    render(<Footer />)

    expect(
      screen.getByText('© 2024 Mentor. All rights reserved.')
    ).toBeInTheDocument()
  })
})
