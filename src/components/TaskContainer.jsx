import { Task } from './Task'
import { useState } from 'react'

export function TaskContainer ({ day, tasks = [] }) {
  const [currentTasks, setCurrentTasks] = useState(tasks)

  const handleTaksClick = (index) => {
    const newTaskList = [...currentTasks]
    const filteredTaskList = newTaskList.filter((e, i) => i !== index)
    console.log(index)
    setCurrentTasks(filteredTaskList)
  }

  return (
    <div>
      <h2 role='day'>{day}</h2>
      <>
        {currentTasks.map((task, index) => {
          return <Task key={index} {...task} onClickHandle={() => handleTaksClick(index)} />
        })}
      </>
    </div>
  )
}
