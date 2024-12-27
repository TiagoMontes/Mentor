import { useRouter } from 'next/router'
import Link from 'next/link'
import { NextPageWithLayout } from '@/pages/_app'
import { ReactElement } from 'react'
import DefaultLayout from '@/layouts/Default'

// TODO - change this page
const UserInfoPage: NextPageWithLayout = () => {
  const router = useRouter()

  return (
    <div className="flex w-full flex-col border-black">
      <div className="flex flex-col gap-2 rounded-2xl border-2 p-4">
        <p>User: {router.query.user}</p>
        <Link href={'/'}>
          <button className="rounded-lg bg-black p-2 text-white">Return</button>
        </Link>
      </div>
    </div>
  )
}

UserInfoPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default UserInfoPage
