import { useState } from 'react'
import { InputStyled, ToDoListContainer } from './style'
import { KeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { dropIn } from '../../styles/animations'

const ToDoList = () => {
  const [list, setList] = useState<Array<string>>([])

  const handleWrite = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (!['Enter', 'NumpadEnter'].includes(ev.code)) return
    if (ev.currentTarget.value == '') return
    const newList = [...list, ev.currentTarget.value]
    setList(newList)
    // setList(list => [...list, ev.currentTarget.value])
    ev.currentTarget.value = ''
  }

  return (
    <>
      <ToDoListContainer>
        <InputStyled autoFocus onKeyDown={ev => handleWrite(ev)} />
        <ul>
          <AnimatePresence
            initial={false}
            mode="sync"
            onExitComplete={() => null}
          >
            {list.map((item, idx) => {
              return (
                <motion.div
                  onClick={ev => ev.stopPropagation()}
                  variants={dropIn}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  key={idx}
                >
                  <li>{item}</li>
                  <button
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      padding: '.2rem .5rem',
                      borderRadius: 50
                    }}
                    value={idx}
                    onClick={() =>
                      setList(list.filter((_, index) => index !== idx))
                    }
                  >
                    X
                  </button>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </ul>
      </ToDoListContainer>
    </>
  )
}

export { ToDoList }
