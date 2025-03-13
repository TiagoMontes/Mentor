import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MenuItem from '@/components/Menu/MenuItem'

describe('MenuItem Component', () => {
  it('should render a list item with a link', () => {
    render(<MenuItem path="/about" name="About" />)

    const listItem = screen.getByRole('listitem')
    const link = screen.getByRole('link', { name: 'About' })

    expect(listItem).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })

  it('should render a li with cursor pointer and hover text grey classes', () => {
    render(<MenuItem path="/about" name="About" />)

    const listItem = screen.getByRole('listitem')
    expect(listItem).toHaveClass('cursor-pointer hover:text-[#D1D5DB]')
  })

  it('should render a link with the correct href', () => {
    render(<MenuItem path="/about" name="About" />)

    const link = screen.getByRole('link', { name: 'About' })
    expect(link).toHaveAttribute('href', '/about')
  })

  it('should render a link with the correct aria-description', () => {
    render(<MenuItem path="/about" name="About" />)

    const link = screen.getByRole('link', { name: 'About' })
    expect(link).toHaveAttribute('aria-description', 'link-para-About')
  })

  it('should render the link with the correct text', () => {
    render(<MenuItem path="/about" name="About" />)

    const link = screen.getByRole('link', { name: 'About' })
    expect(link).toHaveTextContent('About')
  })
})
