import { NextPageWithLayout } from '@/pages/_app'
import useUser from '@/hooks/useUser'

const UserPage: NextPageWithLayout = () => {
  const { user, isLoading, isError, error } = useUser()

  if (isError && error) return <div>{error.message}</div>
  if (isLoading || !user) return <div>loading...</div>

  return (
    <div className="flex w-full flex-col rounded-2xl border-2 p-4">
      <h1>Nome: {user.name}</h1>
      <h1>Idade: {user.age}</h1>
      <h1>Email: {user.email}</h1>
      <h1>Telefone: {user.phone}</h1>
    </div>
  )
}

export default UserPage
