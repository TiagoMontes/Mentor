// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // o código vai esperar essa promise, sem ela, independente do que use como await, ele não irá esperar, já que é async.
  // O await funciona apenas com Promises
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve('3 segundos se passaram')
    }, 3000)
  )

  // executado apenas depois de 3s
  console.log('macacu')
  res.status(200).json({ name: 'John Doe' })
}
