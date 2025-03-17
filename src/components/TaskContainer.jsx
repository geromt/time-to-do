import { Task } from './Task'

export function TaskContainer ({ day, tasks = [] }) {
  return (
    <div>
      <h2 role='day'>{day}</h2>
      <>
        {tasks.map((task, index) => {
          return <Task key={index} {...task} />
        })}
      </>
    </div>
  )
}
