import { useQuery } from '@tanstack/react-query'
import { User } from '@/type'

export default function useUser() {
  const { data, isPending, isError, error } = useQuery<User>({
    queryKey: ['user'],
    queryFn: fetchUser,
    refetchOnWindowFocus: false,
    retry: false,
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
  try {
    const response = await fetch('/api/user/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error('Error fetching user')
    }
    return response.json()
  } catch {
    throw new Error('Error fetching user')
  }
}
