import { useState } from 'react'

export function useTodo () {
  const [tasks, setTasks] = useState(new Map())
  const [id, setId] = useState(0)
  const createTask = text => {
    setTasks(new Map([...tasks]).set(id, { isSelected: false, text }))
    setId(id + 1)
  }
  const deleteTask = id => {
    const newTasks = new Map([...tasks])
    newTasks.delete(id)
    setTasks(newTasks)
  }
  const toggleTask = id => {
    const newTasks = new Map([...tasks])
    const task = newTasks.get(id)
    task.isSelected = !task.isSelected
    setTasks(newTasks)
  }
  return [tasks, createTask, deleteTask, toggleTask]
}
