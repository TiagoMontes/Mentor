import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '@/type'

type ErrorResponse = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[] | ErrorResponse>
) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve('3 seconds have passed')
    }, 3000)
  )

  if (req.method === 'GET') {
    try {
      res.status(200).json([
        {
          name: 'John Doe',
          age: 25,
          email: 'john@gmail.com',
          phone: '0123456789'
        },
        {
          name: 'Maria Doe',
          age: 30,
          email: 'maria@gmail.com',
          phone: '0123412354'
        },
        {
          name: 'Neymar Doe',
          age: 12,
          email: 'neymar@gmail.com',
          phone: '1294949024'
        },
        {
          name: 'Caze Doe',
          age: 28,
          email: 'caze@gmail.com',
          phone: '5666556789'
        }
      ])
    } catch {
      res.status(500).json({ message: 'Error fetching users.' })
    }
  }
}
