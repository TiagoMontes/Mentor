// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { RegisterType } from '@/type'
import { supabase } from '@/utils/supabase'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { username, email, password, age }: RegisterType = req.body

      const { error } = await supabase
        .from('user')
        .insert({
          email: email,
          username: username,
          password: password,
          age: age
        })
        .select('*')

      if (error) {
        throw error
      }

      res.status(200).json({ message: 'Profile created!' })
    } catch {
      res.status(500).json({ message: 'Error creating profile!' })
    }
  }
}
