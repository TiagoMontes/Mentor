// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '@/type'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve('3 segundos se passaram')
    }, 3000)
  )

  res.status(200).json({
    name: 'John Doe',
    age: 25,
    email: 'john@gmail.com',
    phone: '0123456789'
  })
}
