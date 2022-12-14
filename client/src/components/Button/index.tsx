import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { ButtonS } from './style'

interface ButtonProps extends ButtonHTMLAttributes<PropsWithChildren> {
  children: string
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <ButtonS>{props.children}</ButtonS>
    </>
  )
}

export { Button }
