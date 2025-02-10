import useFetchData from './useFetchData'
import { User } from '@/type'

export default function useUser(userId?: string) {
  // search specified user id not implemented
  const url = userId ? `/api/user/${userId}` : `/api/user/profile`

  return useFetchData<User>(userId ? ['user', userId] : ['user'], url)
}
