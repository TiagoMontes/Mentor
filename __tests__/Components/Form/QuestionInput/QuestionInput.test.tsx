import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import QuestionInput from '@/components/Form/QuestionInput'

const mockRegister = jest.fn().mockReturnValue({
  name: 'questionAsk',
  onChange: jest.fn(),
  onBlur: jest.fn(),
  ref: jest.fn(),
})

describe('QuestionInput', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the QuestionInput component with an input', () => {
    render(<QuestionInput register={mockRegister} />)
    const input = screen.getByPlaceholderText('Faça uma pergunta...')
    expect(input).toBeInTheDocument()
  })

  it('applies the correct props to the input', () => {
    render(<QuestionInput register={mockRegister} />)
    const input = screen.getByPlaceholderText('Faça uma pergunta...')

    expect(input).toHaveClass(
      'bg-black outline-none w-full rounded-lg border-2 border-black p-2'
    )

    expect(input).toHaveAttribute('type', 'text')

    expect(input).toHaveAttribute('placeholder', 'Faça uma pergunta...')

    expect(mockRegister).toHaveBeenCalledWith('questionAsk', {})
  })

  it('should check if the total number of inputs rendered is as expected', () => {
    render(<QuestionInput register={mockRegister} />)
    const allInputs = screen.queryAllByRole('input')

    expect(allInputs).toBe(1)
  })

  it('matches snapshot', () => {
    const { container } = render(<QuestionInput register={mockRegister} />)
    expect(container).toMatchSnapshot()
  })
})
