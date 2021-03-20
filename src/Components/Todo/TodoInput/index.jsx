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
      <button onClick={buttonHandler}>Create</button>
      <input onChange={inputHandler} value={value}></input>
    </div>
  )
}

export default TodoInput
