import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

type ErrorResponse = {
  message: string
}

type ResponseData = {
  message: string
  threadId: string
}
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const ASSISTANT_ID = process.env.ASSISTANT_ID

const openai = new OpenAI({ apiKey: OPENAI_API_KEY })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ErrorResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { message, threadId: incomingThreadId } = req.body

  if (!message) {
    return res.status(400).json({ message: 'Message is required' })
  }

  try {
    let threadId = incomingThreadId
    if (!threadId) {
      const thread = await openai.beta.threads.create()
      threadId = thread.id
    }

    await openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: `${message}`,
    })

    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: ASSISTANT_ID!,
    })

    await waitForCompletion(threadId, run.id)
    const messages = await openai.beta.threads.messages.list(threadId)
    const assistantMessage = messages.data.find(
      (msg) => msg.role === 'assistant'
    )
    let responseMessage = 'Sem resposta.'
    if (assistantMessage && assistantMessage.content.length > 0) {
      const contentBlock = assistantMessage.content[0]
      if (contentBlock.type === 'text') {
        responseMessage = contentBlock.text.value
      }
    }

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
        await new Promise((resolve) => setTimeout(resolve, 8000))
        return checkStatus()
      }
    } catch (error) {
      console.error('❌ Erro ao verificar status:', error)
    }
  }

  await checkStatus()
}
