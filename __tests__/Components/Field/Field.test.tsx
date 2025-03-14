import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { RegisterOptions } from 'react-hook-form'
import Field from '@/components/Field'

type TestFormData = {
  name: string
  email: string
  age: number
}

const mockRegister = jest.fn().mockReturnValue({
  name: '',
  onChange: jest.fn(),
  onBlur: jest.fn(),
  ref: jest.fn(),
})

describe('Field Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the input element with default props', () => {
    render(<Field<TestFormData> inputName="name" register={mockRegister} />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveClass('w-full rounded-lg border-2 border-black p-2')
    expect(input).toHaveAttribute('type', 'text')
  })

  it('applies the placeholder prop correctly', () => {
    render(
      <Field<TestFormData>
        inputName="name"
        register={mockRegister}
        placeholder="Digite seu nome"
      />
    )
    const input = screen.getByPlaceholderText('Digite seu nome')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', 'Digite seu nome')
  })

  it('merges custom className with default classes', () => {
    render(
      <Field<TestFormData>
        inputName="name"
        register={mockRegister}
        className="bg-blue-500 text-white"
      />
    )
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass(
      'bg-blue-500 text-white w-full rounded-lg border-2 border-black p-2'
    )
  })

  it('applies the correct type prop', () => {
    render(
      <Field<TestFormData>
        inputName="email"
        register={mockRegister}
        type="email"
      />
    )
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'email')
  })

  it('registers the input with rules correctly', () => {
    const rules: RegisterOptions<TestFormData, 'name'> = { required: true }
    render(
      <Field<TestFormData>
        inputName="name"
        register={mockRegister}
        rules={rules}
      />
    )
    expect(mockRegister).toHaveBeenCalledWith('name', rules)
  })

  it('triggers onChange when typing', () => {
    render(<Field<TestFormData> inputName="name" register={mockRegister} />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Teste' } })
    expect(mockRegister().onChange).toHaveBeenCalled()
  })

  it('renders without a label by default', () => {
    render(<Field<TestFormData> inputName="name" register={mockRegister} />)
    const label = screen.queryByRole('label')
    expect(label).not.toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { container } = render(
      <Field<TestFormData>
        inputName="name"
        register={mockRegister}
        placeholder="Digite seu nome"
        className="bg-red-500"
      />
    )
    expect(container).toMatchSnapshot()
  })
})
