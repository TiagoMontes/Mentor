import Field from "@/components/Field"

export default function QuestionAi({register}) {
  return (
    <>
      <Field inputName="questionAsk" register={register} placeholder="Faça uma pergunta..." className="bg-black outline-none" />
    </>
  )
}