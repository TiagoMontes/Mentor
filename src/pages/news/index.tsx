import { useState } from 'react'
import { Sync } from '@/components/Icons'
import { NextPageWithLayout } from '@/pages/_app'
import { FieldInformation } from '@/components/FieldInformation'

type NewsItem = {
  id: string
  title: string
  description: string
  date: string
}

const News: NextPageWithLayout = () => {
  const [news, setNews] = useState<NewsItem[]>([])
  const [isLoading, setIsLoading] = useState(false)

  async function fetchLatestNews() {
    setIsLoading(true)
    const res = await fetch('/api/OpenAI/news', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch news: ${res.status}`)
    }

    const data = await res.json()
    const parsedNews = parseNews(data.message)
    setNews(parsedNews)
    setIsLoading(false)
  }

  function parseNews(message: string | undefined): NewsItem[] {
    return message ? JSON.parse(message) : []
  }

  return (
    <div className="max-w-4xl mx-auto p-4 font-sans flex flex-col min-h-screen text-white">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Novidades sobre concursos!</h1>
        <button
          onClick={fetchLatestNews}
          className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          disabled={isLoading}
          aria-label={isLoading ? 'Refreshing news' : 'Refresh news'}
        >
          <Sync className={`h-6 w-6 ${isLoading && 'animate-spin-anti'}`} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 transition-colors">
        {news.length === 0 ? (
          <div className="bg-gray-800 rounded-lg p-5 shadow-sm text-center">
            <p className="text-gray-300 text-base leading-relaxed">
              Clique no botão para receber as informações atualizadas dos
              ultimos concursos
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {news.map((item) => (
              <FieldInformation.Root key={item.id}>
                <FieldInformation.Header>
                  <FieldInformation.Title>{item.title}</FieldInformation.Title>

                  <FieldInformation.Date>{item.date}</FieldInformation.Date>
                </FieldInformation.Header>

                <FieldInformation.Description>
                  {item.description}
                </FieldInformation.Description>
              </FieldInformation.Root>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default News
