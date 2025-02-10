import { NextPageWithLayout } from '@/pages/_app'
// import AlternativeLayout from '@/layouts/Alternative'
import useUsers from '@/hooks/useUsers'
import { Menu } from '@/components/Menu'

const Home: NextPageWithLayout = () => {
  const { data: users = [], isLoading } = useUsers()

  return (
    <div className="flex w-full flex-col gap-2 rounded-2xl border-2 p-4">
      <div className="flex flex-col">
        {isLoading && users ? (
          <h1>Procurando mentorias...</h1>
        ) : users.length === 0 ? (
          <h1>Nenhum usuário encontrado...</h1>
        ) : (
          <ul>
            {users.map((user, index) => (
              <Menu.Item
                key={index}
                path={`/user/${user.name}`}
                name={user.name}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Home
