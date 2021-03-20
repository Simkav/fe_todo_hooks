import React, { useState } from 'react'

const TodoInput = props => {
  const { addTask } = props
  const [value, setValue] = useState('')
  const inputHandler = ({ target: { value } }) => {
    setValue(value)
  }
  const buttonHandler = () => {
    addTask(value)
  }
  return (
    <div>
      <input onChange={inputHandler} value={value}></input>
      <button onClick={buttonHandler}>+</button>
    </div>
  )
}

export default TodoInput
