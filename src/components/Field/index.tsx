import {
  UseFormRegister,
  RegisterOptions,
  FieldValues,
  Path
} from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface FieldProps<TFormValues extends FieldValues> {
  inputName: Path<TFormValues>
  register: UseFormRegister<TFormValues>
  type?: string
  rules?: RegisterOptions<TFormValues, Path<TFormValues>>
  className?: string
}

export default function Field<TFormValues extends FieldValues>({
  inputName,
  register,
  type = 'text',
  rules = {},
  className
}: FieldProps<TFormValues>) {
  return (
    <input
      className={twMerge(
        className,
        'w-full rounded-lg border-2 border-black p-4'
      )}
      {...register(inputName, rules)}
      type={type}
    />
  )
}
