import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import DefaultLayout from '@/layouts/Default'
// import AlternativeLayout from '@/layouts/Alternative'
import useUser from '@/hooks/useUser'

const Home: NextPageWithLayout = () => {
  const { user, isLoading, isError } = useUser()

  return (
    <div>
      <h1>
        ola mundo
        {isLoading
          ? ', ...'
          : isError
            ? ', ops... Ocorreu um erro'
            : ` ${user.name}`}
      </h1>
      <p>Hallo Verden</p>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
