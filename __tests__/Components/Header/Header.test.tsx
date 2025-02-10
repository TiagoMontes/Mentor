import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'
import React from 'react'
import { itemsMenu } from '@/utils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

describe('Header component', () => {
  it('should render a link with name MENTOR', () => {
    const queryClient = new QueryClient()

    render(
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>
    )
    const mentorLink = screen.getByRole('link', { name: 'Mentor' })

    expect(mentorLink).toBeInTheDocument()
  })

  it('should render Home menu item', () => {
    const queryClient = new QueryClient()

    render(
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>
    )

    itemsMenu.forEach((item) => {
      const link = screen.getByRole('link', { name: item.name })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', item.path)
    })
  })

  it('must contain exactly the expected menu items', () => {
    const expectedItems = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' }
    ]

    expect(itemsMenu).toEqual(expectedItems)
  })

  it('should check if the total number of links rendered is as expected and user is not logged', () => {
    const queryClient = new QueryClient()

    render(
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>
    )

    const links = screen.queryAllByRole('link')

    console.log(links)
    expect(links.length).toBe(3)
  })

  it('should check if the total number of links rendered is as expected and user is logged', () => {
    const queryClient = new QueryClient()

    queryClient.setQueryData(['user'], {
      name: 'John Doe',
      age: 25,
      email: 'john@gmail.com',
      phone: '0123456789'
    })

    render(
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>
    )

    const links = screen.queryAllByRole('link')

    console.log(links)
    expect(links.length).toBe(4)
  })
})
