import { forwardRef, InputHTMLAttributes } from 'react'
import { InputContainerS, InputS } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = forwardRef((props: InputProps, ref) => (
  <InputContainerS>
    <InputS ref={ref} {...props} autoFocus />
    <label>{props.label}</label>
  </InputContainerS>
))

export { Input }
