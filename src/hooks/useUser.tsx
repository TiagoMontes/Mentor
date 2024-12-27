import { useQuery } from '@tanstack/react-query'

type User = {
  name: string
  email: string
  phone: string
  age: number
}

export default function useUser() {
  const { data, isPending, isError, error } = useQuery<User>({
    queryKey: ['user'],
    queryFn: fetchUser,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 30
  })

  return {
    user: data,
    isLoading: isPending,
    isError,
    error
  }
}

async function fetchUser(): Promise<User> {
  const response = await fetch('/api/User/getInfo')
  if (!response.ok) {
    throw new Error('Erro ao buscar os dados do usuário')
  }
  return response.json()
}
