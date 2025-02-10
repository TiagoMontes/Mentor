import { NextPageWithLayout } from '@/pages/_app'
import useUser from '@/hooks/useUser'
import { GetServerSidePropsContext } from 'next'

type UserPageProps = {
  slug: string
}

const UserPage: NextPageWithLayout<UserPageProps> = ({ slug }) => {
  const { data: user, isLoading, isError, error } = useUser(slug)

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context

  return { props: { slug: query.user_id || null } }
}

export default UserPage
