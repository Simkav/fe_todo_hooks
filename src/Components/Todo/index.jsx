import { useTodo } from '../../Hooks/index'
import cx from 'classnames'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import styles from './Todo.module.scss'
const Todo = () => {
  const [tasks, createTask, deleteTask, toggleTask] = useTodo()
  const addTask = text => {
    createTask(text)
  }
  return (
    <div className={cx(styles.todo_app)}>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  )
}

export default Todo
