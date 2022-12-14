import styled from 'styled-components'
import { ButtonS } from '../Button/style'
import { InputContainerS, InputS } from '../Input/style'

const ContainerS = styled.div`
  display: grid;
  width: 100vw;
  max-height: 100vh;
  align-items: center;
  grid-template-columns: 60vw 1fr;
`

const FormContainerS = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-blue-400);
  color: var(--clr-white-400);
  font-family: var(--ff-primary);
  padding: 2rem;
  text-align: center;
  border-radius: 2rem 0 0 2rem;

  h1 {
    font-size: var(--fs-900);
  }
`

const FormS = styled.form`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;

  ${InputContainerS} {
    margin: 1rem 0;
    width: 100%;

    ${InputS} {
      background-color: var(--clr-white-600);
      padding: 1rem;
    }
  }

  ${ButtonS} {
    width: 100%;
    padding: 1rem;
    font-size: var(--fs-400);
    border-radius: 0.5rem;
    background-color: var(--clr-blue-200);
    color: var(--clr-white-400);
    text-transform: uppercase;
    margin-top: 2rem;
    outline: 2px solid transparent;
    transition-property: outline-color, background-color;
    transition-duration: 0.6s;

    &:hover {
      background-color: transparent;
      outline-color: var(--clr-white-400);
    }
  }
`

export { ContainerS, FormContainerS, FormS }
