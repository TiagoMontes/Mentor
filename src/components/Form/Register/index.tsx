import { UseFormRegister } from 'react-hook-form'
import Field from '@/components/Field'
import { RegisterType } from '@/type'

export default function Register({
  register,
}: {
  register: UseFormRegister<RegisterType>
}) {
  return (
    <>
      <Field inputName="email" register={register} placeholder="E-mail" />
      <Field inputName="age" register={register} placeholder="Sua idade" />
      <Field inputName="username" register={register} placeholder="Usuário" />
      <Field inputName="password" register={register} placeholder="*******" />
    </>
  )
}
