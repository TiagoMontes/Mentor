import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MenuItem from '@/components/Menu/MenuItem'
import { itemsMenu } from '@/utils'

describe('Menu.Item component', () => {
  it('should render a list item with a link', () => {
    itemsMenu.forEach((item) => {
      render(<MenuItem path={item.path} name={item.name} />)

      const link = screen.getByRole('link', { name: item.name })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', item.path)
      expect(link).toBeDefined()
    })
  })

  it('should render a li with cursor pointer', () => {
    render(<MenuItem path={'/'} name={'default'} />)

    const liItem = screen.getByRole('listitem')
    expect(liItem).toHaveClass('cursor-pointer')
    expect(liItem).toHaveClass('hover:text-[#D1D5DB]')
  })

  it('should throw an error if href is not defined', () => {
    expect(() => render(<MenuItem name="home" />)).toThrow()
  })

  it('should throw an error if name is not defined', () => {
    expect(() => render(<MenuItem path="/" />)).toThrow()
  })
})
