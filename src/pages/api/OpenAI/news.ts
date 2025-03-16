import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
import { searchGoogle } from '@/pages/api/google'

type ErrorResponse = { message: string }
type ResponseData = { message: string; threadId: string }

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const ASSISTANT_ID = process.env.ASSISTANT_ID

const openai = new OpenAI({ apiKey: OPENAI_API_KEY })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ErrorResponse>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: `Gere uma lista de notícias sobre concursos públicos no formato JSON com os campos: id (string), title (string), description (string), date (string).`,
        },
      ],
    })

    const responseMessage =
      response.choices[0].message.content || 'Sem resposta.'

    res.status(200).json({ message: responseMessage })
  } catch (error) {
    console.error('❌ Erro ao processar requisição:', error)
    res.status(500).json({ message: 'Erro ao processar a solicitação' })
  }
}

async function waitForCompletion(
  threadId: string,
  runId: string
): Promise<void> {
  const checkStatus = async (): Promise<void> => {
    try {
      const runStatus = await openai.beta.threads.runs.retrieve(threadId, runId)
      if (runStatus.status !== 'completed') {
        await new Promise((resolve) => setTimeout(resolve, 8000))
        return checkStatus()
      }
    } catch (error) {
      console.error('❌ Erro ao verificar status:', error)
    }
  }

  await checkStatus()
}
