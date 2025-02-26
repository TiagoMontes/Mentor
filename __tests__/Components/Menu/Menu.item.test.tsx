import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MenuItem from '@/components/Menu/MenuItem'
import { itemsMenu } from '@/utils/utils'

describe('Menu.Item component', () => {
  it('should render a list item with a link', () => {
    itemsMenu.forEach((item) => {
      render(<MenuItem path={item.path} name={item.name} />)

      const link = screen.queryByRole('link', { name: item.name })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', item.path)
      expect(link).toBeDefined()
    })
  })

  it('should render a li with cursor pointer and text grey in tailwind class', () => {
    render(<MenuItem path={'/'} name={'default'} />)

    const liItem = screen.getByRole('listitem')
    expect(liItem).toHaveClass('cursor-pointer hover:text-[#D1D5DB]')
  })

  it('should throw an error if href is not defined', () => {
    expect(() => render(<MenuItem name="home" />)).toThrow()
  })

  it('should throw an error if name is not defined', () => {
    expect(() => render(<MenuItem path="/" />)).toThrow()
  })

  it('A link should have an aria-describedby attribute', () => {
    render(<MenuItem path="/" name="Home" />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-description',
      'link-para-Home'
    )
  })
})
