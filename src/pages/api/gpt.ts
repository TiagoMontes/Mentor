import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

type ErrorResponse = { message: string }
type SearchResult = { title: string; link: string; snippet: string }
type ResponseData = { message: string; threadId: string }

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
const GOOGLE_CX = process.env.GOOGLE_CX
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const ASSISTANT_ID = process.env.ASSISTANT_ID

const openai = new OpenAI({ apiKey: OPENAI_API_KEY })

async function searchGoogle(query: string): Promise<SearchResult[]> {
  const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${GOOGLE_API_KEY}&cx=${GOOGLE_CX}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    if (data.items && data.items.length > 0) {
      return data.items.slice(0, 3).map((item: any) => ({
        title: item.title,
        link: item.link,
        snippet: item.snippet,
      }))
    }

    return [
      {
        title: 'Nenhum resultado encontrado',
        link: '',
        snippet: 'Nenhum resultado relevante encontrado na pesquisa.',
      },
    ]
  } catch (error) {
    console.error('❌ Erro ao buscar no Google:', error)
    return [
      {
        title: 'Erro na busca',
        link: '',
        snippet: 'Ocorreu um erro ao buscar informações atualizadas.',
      },
    ]
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ErrorResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  let { message, threadId } = req.body

  if (!message) {
    return res.status(400).json({ message: 'Message is required' })
  }

  try {
    // search in google here...

    if (!threadId) {
      const thread = await openai.beta.threads.create()
      threadId = thread.id
    }

    await openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: `${message}`,
    })

    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: ASSISTANT_ID,
    })

    await waitForCompletion(threadId, run.id)
    const messages = await openai.beta.threads.messages.list(threadId)
    const responseMessage =
      messages.data.find((msg) => msg.role === 'assistant')?.content[0]?.text
        ?.value || 'Sem resposta.'

    res.status(200).json({ message: responseMessage, threadId })
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
        await new Promise((resolve) => setTimeout(resolve, 3000))
        return checkStatus()
      }
    } catch (error) {
      console.error('❌ Erro ao verificar status:', error)
    }
  }

  await checkStatus()
}
