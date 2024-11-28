import useSWR from 'swr'

export default function useUser() {
  const { data, error, isLoading } = useSWR(
    '/api/hello',
    async (url: string, options?: RequestInit) => {
      const res = await fetch(url, options)
      return res.json()
    },
    {
      revalidateIfStale: false,
      revalidateOnFocus: false
    }
  )

  return {
    user: data,
    isLoading,
    isError: error
  }
}
