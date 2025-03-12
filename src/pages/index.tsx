import { useState, useEffect } from 'react'

type Messages = {
  role: string
  content: string
}

export default function Index() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Messages[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [displayedResponse, setDisplayedResponse] = useState('')
  const [threadId, setThreadId] = useState(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsLoading(true)
    const newMessage = { role: 'user', content: message }
    setMessages((prev) => [...prev, newMessage])
    setMessage('')

    try {
      const res = await fetch('/api/gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, threadId }),
      })

      const data = await res.json()
      const assistantMessage = { role: 'assistant', content: data.message }
      setMessages((prev) => [...prev, assistantMessage])

      let currentText = ''
      for (let i = 0; i < data.message.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 30))
        currentText += data.message[i]
        setDisplayedResponse(currentText)
      }

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

  useEffect(() => {
    const lastMessage = messages[messages.length - 1]
    if (lastMessage?.role === 'assistant') {
      setDisplayedResponse('')
    }
  }, [messages])

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans flex flex-col min-h-screen text-white">
      <div className="flex-1 overflow-y-auto mb-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 transition-colors">
        <div className="min-h-[200px] sm:min-h-[300px] lg:min-h-[500px]">
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
                className={`mb-4 p-4 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-blue-900 text-white ml-auto max-w-[80%]'
                    : 'bg-gray-700 text-gray-200 max-w-[80%]'
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
        onSubmit={handleSubmit}
        className="flex gap-3 flex-col sm:flex-row sticky bottom-4 bg-gray-700 p-2 rounded-lg shadow-md"
      >
        <input
          value={message}
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow text-white p-3 text-sm bg-gray-800 outline-none border-none rounded-md focus:ring-2 focus:ring-blue-500 disabled:text-gray-600"
          placeholder="Digite sua mensagem aqui"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  )
}
