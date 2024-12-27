import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import useUser from '@/hooks/useUser'
import AlternativeLayout from '@/layouts/Alternative'

const UserPage: NextPageWithLayout = () => {
  const { user, isLoading, isError } = useUser()

  if (isError) return <div>failed to load</div>
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

UserPage.getLayout = function getLayout(page: ReactElement) {
  return <AlternativeLayout>{page}</AlternativeLayout>
}

export default UserPage
