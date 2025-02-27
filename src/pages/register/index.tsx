import { useForm } from 'react-hook-form'
import { RegisterType } from '@/type'
import Register from '@/components/Form/Register'
import Link from 'next/link'
import createUser from '@/services/user/create'

export default function RegisterPage() {
  const { register, handleSubmit } = useForm<RegisterType>()

  async function submitValues(values: RegisterType) {
    const response = await createUser(values)

    if (response.status !== 200) {
      return alert(response.message)
    }

    return alert(response.message)
  }

  return (
    <div className="flex justify-center">
      <div className="flex max-w-72 flex-col items-center gap-4 rounded-lg border-2 p-4">
        <h1>Registre-se</h1>
        <form
          onSubmit={handleSubmit(submitValues)}
          className="flex flex-col gap-2"
        >
          <Register register={register} />
          <button className="rounded-full border-2 border-black p-2 hover:bg-black hover:text-white">
            Enviar
          </button>
          <p className="text-center text-[12px]">
            Ja possui uma conta?{' '}
            <Link href="/login" className="underline underline-offset-2">
              Realize login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
