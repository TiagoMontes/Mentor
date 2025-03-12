// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '@/type'

type ErrorResponse = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | ErrorResponse>
) {
  const { user_id } = req.query

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve('3 segundos se passaram')
    }, 3000)
  )

  if (req.method === 'GET') {
    try {
      res.status(200).json({
        name: String(user_id),
        age: 35,
        email: 'dynamical@gmail.com',
        phone: '9876543210',
      })
    } catch {
      res.status(500).json({ message: 'Error fetching user' })
    }
  }

  if (req.method === 'POST') {
    try {
      res.status(200).json({ message: 'Profile sent!' })
    } catch {
      res.status(500).json({ message: 'Error sending profile!' })
    }
  }

  if (req.method === 'PATCH') {
    try {
      res.status(200).json({ message: 'Profile updated!' })
    } catch {
      res.status(500).json({ message: 'Error updating profile!' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      res.status(200).json({ message: 'Profile removed!' })
    } catch {
      res.status(500).json({ message: 'Error removing profile!' })
    }
  }
}
