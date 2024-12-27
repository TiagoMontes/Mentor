import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import DefaultLayout from '@/layouts/Default'
// import AlternativeLayout from '@/layouts/Alternative'
import useUser from '@/hooks/useUser'

const Home: NextPageWithLayout = () => {
  const { user, isLoading, isError } = useUser()

  return (
    <div className="flex w-full flex-col gap-2 rounded-2xl border-2 p-4">
      <h1>
        Bem vindo à home
        {isLoading || !user
          ? ', ...'
          : isError
            ? ', ops... Ocorreu um erro'
            : ` ${user.name}`}
      </h1>

      {/* todo - implement another logic about user info */}
      {/*<div className="flex">*/}
      {/*  <ul className="flex gap-4">*/}
      {/*    <li className="rounded-lg bg-black p-2 text-white">*/}
      {/*      <Link*/}
      {/*        href={{*/}
      {/*          pathname: `/info/[user]`,*/}
      {/*          query: { user: 'user1' }*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        user1*/}
      {/*      </Link>*/}
      {/*    </li>*/}
      {/*    <li className="rounded-lg bg-black p-2 text-white">*/}
      {/*      <Link*/}
      {/*        href={{*/}
      {/*          pathname: `/info/[user]`,*/}
      {/*          query: { user: 'user2' }*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        user2*/}
      {/*      </Link>*/}
      {/*    </li>*/}
      {/*    <li className="rounded-lg bg-black p-2 text-white">*/}
      {/*      <Link*/}
      {/*        href={{*/}
      {/*          pathname: `/info/[user]`,*/}
      {/*          query: { user: 'user3' }*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        user3*/}
      {/*      </Link>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
