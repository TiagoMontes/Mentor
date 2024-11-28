import { useQuery } from '@tanstack/react-query'

export default function useUser() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 30
  })

  return {
    user: data,
    isPending,
    isError,
    error
  }
}

async function fetchUser() {
  const response = await fetch('/api/hello')
  if (!response.ok) {
    throw new Error('Erro ao buscar os dados do usuário')
  }
  return response.json()
}
