import { UseFormRegister } from 'react-hook-form'
import Field from '@/components/Field'
import { LoginType } from '@/type'

export default function Login({
  register,
}: {
  register: UseFormRegister<LoginType>
}) {
  return (
    <>
      <Field inputName="username" register={register} placeholder="Usuário" />
      <Field inputName="password" register={register} placeholder="*******" />
    </>
  )
}
