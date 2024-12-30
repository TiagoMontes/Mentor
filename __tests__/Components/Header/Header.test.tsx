import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'
import React from 'react'
import { itemsMenu } from '@/utils'

describe('Header component', () => {
  it('should render a link with name MENTOR', () => {
    render(<Header />)
    const mentorLink = screen.getByRole('link', { name: 'Mentor' })

    expect(mentorLink).toBeInTheDocument()
  })

  it('should render Home menu item', () => {
    render(<Header />)

    itemsMenu.forEach((item) => {
      const link = screen.getByRole('link', { name: item.name })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', item.path)
    })
  })

  it('must contain exactly the expected menu items', () => {
    const expectedItems = [
      { name: 'Home', path: '/' },
      { name: 'User', path: '/user' },
      { name: 'About', path: '/about' }
    ]

    expect(itemsMenu).toEqual(expectedItems)
  })

  it('should check if the total number of links rendered is as expected', () => {
    render(<Header />)

    const links = screen.queryAllByRole('link')
    expect(links.length).toBe(4)
  })
})
