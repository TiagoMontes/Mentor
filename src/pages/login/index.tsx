import { NextPageWithLayout } from '@/pages/_app'
import { useForm } from 'react-hook-form'
import Login from '@/components/Form/Login'
import { LoginType } from '@/type'
import Link from 'next/link'

const LoginPage: NextPageWithLayout = () => {
  const { register, handleSubmit } = useForm<LoginType>()

  function logValues(values: LoginType) {
    console.log(values)
  }

  return (
    <div className="flex justify-center">
      <div className="flex max-w-72 flex-col items-center gap-4 rounded-lg border-2 p-4">
        <h1>Login</h1>
        <form
          onSubmit={handleSubmit(logValues)}
          className="flex flex-col gap-2"
        >
          <Login register={register} />
          <button className="rounded-full border-2 border-black p-2 hover:bg-black hover:text-white">
            Enviar
          </button>
          <p className="text-center text-[12px]">
            Ainda não possui uma conta?{' '}
            <Link href="/register" className="underline underline-offset-2">
              Registre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
