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
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <h1 className='font-bold text-amber-950 font-mono text-6xl md:text-8xl lg:text-9xl my-8'>Time To-Do</h1>
      <InsertForm handleAdd={handleAddTask} />
      <TaskContainer day={Date.now()} taskList={taskList} setTaskList={setTaskList} />
    </div>
  )
}

export default App
