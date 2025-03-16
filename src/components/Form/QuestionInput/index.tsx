import Field from '@/components/Field'
import { UseFormRegister } from 'react-hook-form'
import { FormData } from '@/type'

type QuestionInputProps = {
  register: UseFormRegister<FormData>
}

export default function QuestionInput({ register }: QuestionInputProps) {
  return (
    <>
      <Field
        inputName="questionAsk"
        register={register}
        placeholder="Faça uma pergunta..."
        className="bg-black outline-none"
      />
    </>
  )
}
