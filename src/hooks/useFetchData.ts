import { useQuery } from '@tanstack/react-query'

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })

  if (!response.ok) throw new Error(`Error fetching data from ${url}`)

  return response.json()
}

export default function useFetchData<T>(key: string[], url: string) {
  const { data, isPending, isError, error } = useQuery<T>({
    queryKey: key,
    queryFn: () => fetchData<T>(url),
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 30
  })

  return {
    data,
    isLoading: isPending,
    isError,
    error
  }
}
