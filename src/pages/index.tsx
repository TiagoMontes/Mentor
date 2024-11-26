import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import DefaultLayout from '@/layouts/Default'
import AlternativeLayout from '@/layouts/Alternative'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h1>ola mundo</h1>
      <p>Hallo Verden</p>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
