import { useState } from 'react'
import { ArrowUpward, Sync } from '@/components/Icons'
import QuestionAi from '@/components/Form/QuestionAi'
import { useForm } from 'react-hook-form'
import { FormData } from '@/type'

type Messages = {
  role: string
  content: string
}

export default function Index() {
  const [messages, setMessages] = useState<Messages[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [displayedResponse, setDisplayedResponse] = useState('')
  const [threadId, setThreadId] = useState(null)
  const { register, handleSubmit, reset } = useForm<FormData>()

  async function askSomething(values: FormData) {
    const question = values.questionAsk.trim()
    if (!question) return

    setIsLoading(true)
    const newMessage = { role: 'user', content: question }
    setMessages((prev) => [...prev, newMessage])
    reset()

    try {
      const res = await fetch('/api/gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: question, threadId }),
      })

      const data = await res.json()
      const assistantMessage = { role: 'assistant', content: data.message }
      setMessages((prev) => [...prev, assistantMessage])
      setDisplayedResponse(data.message)

      if (data.threadId) {
        setThreadId(data.threadId)
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Desculpe, algo deu errado.' },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans flex flex-col min-h-screen text-white">
      <div className="flex-1 overflow-y-auto mb-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 transition-colors">
        <div className="flex flex-col gap-8 min-h-[200px] sm:min-h-[300px] lg:min-h-[500px]">
          {messages.length === 0 ? (
            <div className="bg-gray-800 rounded-lg p-5 shadow-sm text-center">
              <p className="text-gray-300 text-base leading-relaxed">
                Digite uma mensagem para começar...
              </p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-blue-900 text-white w-[80%] self-end'
                    : 'bg-gray-700 text-gray-200 w-[80%]'
                }`}
              >
                <p className="text-base leading-relaxed">
                  {msg.role === 'assistant' && index === messages.length - 1
                    ? displayedResponse
                    : msg.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      <form
        onSubmit={handleSubmit(askSomething)}
        className="flex gap-3 sm:flex-row sticky bottom-4 bg-gray-700 p-2 rounded-lg shadow-md"
      >
        <QuestionAi register={register} />
        <button
          type="submit"
          className="p-3 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          disabled={isLoading}
          aria-label={isLoading ? 'Enviando mensagem' : 'Enviar mensagem'}
        >
          {isLoading ? (
            <Sync className={`h-6 w-6 ${isLoading && 'animate-spin-anti'}`} />
          ) : (
            <ArrowUpward className="h-6 w-6" />
          )}
        </button>
      </form>
    </div>
  )
}
