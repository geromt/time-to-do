import './App.css'
import { TaskContainer } from './components/TaskContainer'

function App () {
  const tasks = [{
    initTime: 7,
    endTime: 8,
    name: 'Taks 1',
    description: 'Description 1'
  },
  {
    initTime: 8,
    endTime: 9,
    name: 'Taks 2',
    description: 'Description 2'
  },
  {
    initTime: 9,
    endTime: 10,
    name: 'Taks 3',
    description: 'Description 3'
  }]
  return (
    <>
      <TaskContainer day={Date.now()} tasks={tasks} />
    </>
  )
}

export default App
