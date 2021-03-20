import React from 'react'
import cx from 'classnames'
import styles from './TodoItem.module.scss'
//TODO add styles
const TodoItem = props => {
  const { deleteTask, toggleTask, task } = props
  const [id, taskBody] = task
  const deleteHandler = () => {
    deleteTask(id)
  }
  const toggleHandler = () => {
    toggleTask(id)
  }
  const classes = cx([
    styles.todo_item_body,
    { [styles.selected]: taskBody.isSelected }
  ])
  return (
    <li className={styles.todo_item} key={id}>
      <div className={classes}>{taskBody.text}</div>
      <button onClick={toggleHandler}>V</button>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  )
}

export default TodoItem
