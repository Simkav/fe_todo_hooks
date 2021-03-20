import React from 'react'

const TodoItem = props => {
  const { deleteTask, toggleTask, task } = props
  const [id, taskBody] = task
  const deleteHandler = () => {
    deleteTask(id)
  }
  const toggleHandler = () => {
    toggleTask(id)
  }
  console.log(id, taskBody)
  return (
    <li key={id}>
      <div>{taskBody.text}</div>
      <button onClick={toggleHandler}>V</button>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  )
}

export default TodoItem
