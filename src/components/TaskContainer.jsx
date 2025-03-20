import { Task } from './Task'

export function TaskContainer ({ day, taskList, setTaskList }) {
  // const [currentTasks, setCurrentTasks] = useState(tasks)

  const handleTaksClick = (index) => {
    const newTaskList = [...taskList]
    const filteredTaskList = newTaskList.filter((e, i) => i !== index)
    setTaskList(filteredTaskList)
  }

  return (
    <div>
      <h2 role='day'>{day}</h2>
      <>
        {taskList.map((task, index) => {
          return <Task key={index} {...task} onClickHandle={() => handleTaksClick(index)} />
        })}
      </>
    </div>
  )
}
