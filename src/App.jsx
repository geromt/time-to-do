import './App.css'
import { useState } from 'react'
import { TaskContainer } from './components/TaskContainer'
import { InsertForm } from './components/InsertForm'

export function App () {
  const [taskList, setTaskList] = useState([])

  const handleAddTask = (formData) => {
    const initTime = formData.get('initTime')
    const endTime = formData.get('endTime')
    const name = formData.get('name')
    const description = formData.get('description')

    const newTaskList = [...taskList]
    newTaskList.push({ initTime, endTime, name, description })
    setTaskList(newTaskList)
  }

  return (
    <>
      <InsertForm handleAdd={handleAddTask} />
      <TaskContainer day={Date.now()} taskList={taskList} setTaskList={setTaskList} />
    </>
  )
}

export default App
