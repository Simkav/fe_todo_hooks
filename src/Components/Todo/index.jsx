import { useTodo } from '../../Hooks/index'
import cx from 'classnames'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const Todo = () => {
  const [tasks, createTask, deleteTask, toggleTask] = useTodo()
  const addTask = text => {
    createTask(text)
  }
  return (
    <>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </>
  )
}

export default Todo
