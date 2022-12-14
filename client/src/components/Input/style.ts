import styled from 'styled-components'

const InputContainerS = styled.div`
  position: relative;

  label {
    position: absolute;
    left: 0.4rem;
    top: 50%;
    transform: translate(0, -50%);
    pointer-events: none;
    transition: font-size, color, top, left;
    transition-duration: var(--td-medium);
    color: var(--clr-black-400);
  }
`

const InputS = styled.input`
  padding: 0.6rem 1rem;
  border-radius: 0.4rem;
  outline: 2px solid transparent;
  transition: outline 0.5s;
  width: 100%;

  &:focus {
    outline: 2px solid var(--clr-blue-200);
  }

  &:focus + label,
  &:valid + label {
    font-size: var(--fs-300);
    color: var(--clr-white-400);
    top: -0.6rem;
    left: 0;
  }
`

const InputSForm = styled(InputS)`
  border-radius: 0.6rem;
`

export { InputContainerS, InputS, InputSForm }
