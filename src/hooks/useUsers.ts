import useFetchData from './useFetchData'
import { User } from '@/type'

export default function useUsers() {
  return useFetchData<User[]>(['users'], '/api/users')
}
