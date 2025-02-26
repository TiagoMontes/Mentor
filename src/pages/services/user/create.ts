type CreateUserProps = {
  email: string
  username: string
  password: string
  age: number
}

export default async function createUser({
  email,
  username,
  password,
  age
}: CreateUserProps) {
  const response = await fetch('/api/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      username,
      password,
      age
    })
  })

  const data = await response.json()

  // todo - this need to be fixed, define here the message error
  if (!response.ok) {
    throw new Error(data.message)
  }

  return {
    status: 200,
    message: data.message
  }
}
