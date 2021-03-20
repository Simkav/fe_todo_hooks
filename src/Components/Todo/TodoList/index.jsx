import React from 'react'
import TodoItem from './TodoItem'

const TodoList = props => {
  const { tasks } = props
  const { deleteTask, toggleTask } = props
  return (
    <ul>
      {[...tasks.entries()].map(e => {
        return (
          <TodoItem
            key={e[0]}
            task={e}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        )
      })}
    </ul>
  )
}

export default TodoList
