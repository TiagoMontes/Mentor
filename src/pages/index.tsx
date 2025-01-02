import { NextPageWithLayout } from '@/pages/_app'
// import AlternativeLayout from '@/layouts/Alternative'
import { useEffect, useState } from 'react'
import { User } from '@/type'

const Home: NextPageWithLayout = () => {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch('/api/users/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }

        const data = await response.json()
        setUsers(data)
        setIsLoading(false)
      }

      fetchData()
    } catch (error) {
      alert(error)
      setIsLoading(false)
    }
  }, [])

  return (
    <div className="flex w-full flex-col gap-2 rounded-2xl border-2 p-4">
      <div className="flex flex-col">
        {isLoading ? (
          <h1>Procurando mentorias...</h1>
        ) : users.length === 0 ? (
          <h1>Nenhum usuário encontrado...</h1>
        ) : (
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Home
