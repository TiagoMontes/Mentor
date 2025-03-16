import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MenuItem from '@/components/Menu/MenuItem'

describe('MenuItem Component', () => {
  it('should render a list item with a link', () => {
    render(<MenuItem path="/news" name="News" />)

    const listItem = screen.getByRole('listitem')
    const link = screen.getByRole('link', { name: 'News' })

    expect(listItem).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })

  it('should render a li with cursor pointer and hover text grey classes', () => {
    render(<MenuItem path="/news" name="News" />)

    const listItem = screen.getByRole('listitem')
    expect(listItem).toHaveClass('cursor-pointer hover:text-[#D1D5DB]')
  })

  it('should render a link with the correct href', () => {
    render(<MenuItem path="/news" name="News" />)

    const link = screen.getByRole('link', { name: 'News' })
    expect(link).toHaveAttribute('href', '/news')
  })

  it('should render a link with the correct aria-description', () => {
    render(<MenuItem path="/news" name="News" />)

    const link = screen.getByRole('link', { name: 'News' })
    expect(link).toHaveAttribute('aria-description', 'link-para-News')
  })

  it('should render the link with the correct text', () => {
    render(<MenuItem path="/news" name="News" />)

    const link = screen.getByRole('link', { name: 'News' })
    expect(link).toHaveTextContent('News')
  })
})
