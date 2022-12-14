import styled from 'styled-components'

const InputStyled = styled.input`
  border: 1px solid var(--clr-black-400);
  border-radius: 0.6rem;
  padding: 0.5rem;
  outline: 0px solid var(--clr-black-400);
  outline-color: transparent;
  outline-offset: 1rem;
  transition: all 0.5s;

  &:focus {
    outline-width: 1px;
    outline-color: var(--clr-black-400);
    outline-offset: 0;
  }
`

const ToDoListContainer = styled.div`
  width: min(500px, 90vw);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ul {
    margin-top: 2rem;

    div {
      position: relative;

      li {
        margin: 1rem 0;
        border: 2px solid var(--clr-black-400);
        border-radius: 1rem;
        padding: 2rem;
        background-color: var(--clr-red-300);
      }
    }
  }
`

export { InputStyled, ToDoListContainer }
