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
    })
  })
})
