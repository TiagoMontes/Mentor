import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import DefaultLayout from '@/layouts/Default'
// import AlternativeLayout from '@/layouts/Alternative'
import useUser from '@/hooks/useUser'

const UserPage: NextPageWithLayout = () => {
  const { user, isLoading, isError } = useUser()

  if (isError) return <div>failed to load</div>
  if (isLoading || !user) return <div>loading...</div>

  return (
    <div className="w-full flex-col gap-4">
      <div className="flex flex-col rounded-2xl border-2 p-4">
        <h1>olá {user.name}</h1>
        <h1>Idade: {user.age}</h1>
        <h1>Email: {user.email}</h1>
        <h1>Telefone: {user.phone}</h1>
      </div>
    </div>
  )
}

UserPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default UserPage
