import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import DefaultLayout from '@/layouts/Default'
// import AlternativeLayout from '@/layouts/Alternative'
import useUser from '@/hooks/useUser'

const Pagina2: NextPageWithLayout = () => {
  const { user, isLoading, isError } = useUser()

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <h1>pagina 2, olá {user.name}</h1>
    </div>
  )
}

Pagina2.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Pagina2
