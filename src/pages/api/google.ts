type SearchResult = {
  title: string
  link: string
  snippet: string
}

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
const GOOGLE_CX = process.env.GOOGLE_CX

export async function searchGoogle(query: string): Promise<SearchResult[]> {
  const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${GOOGLE_API_KEY}&cx=${GOOGLE_CX}`

  console.log(url)
  try {
    const response = await fetch(url)
    const data = await response.json()

    if (data.items && data.items.length > 0) {
      console.log(data)

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
