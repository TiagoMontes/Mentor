import { NextPageWithLayout } from '@/pages/_app'
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
    </div>
  )
}

export default Home
