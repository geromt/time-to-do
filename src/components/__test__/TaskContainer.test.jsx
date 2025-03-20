import { afterEach, describe, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { TaskContainer } from '../TaskContainer'

const tasks = [{
  initTime: 7,
  endTime: 8,
  name: 'Task 1',
  description: 'Description 1'
},
{
  initTime: 8,
  endTime: 9,
  name: 'Task 2',
  description: 'Description 2'
},
{
  initTime: 9,
  endTime: 10,
  name: 'Task 3',
  description: 'Description 3'
}]

describe('TaskContainer', () => {
  afterEach(cleanup)

  it('Should render the day', () => {
    const day = Date.parse('2010-01-01')
    render(<TaskContainer day={day} taskList={[]} />)
    screen.getByText(day)
  })

  it('Should render a task list', () => {
    render(<TaskContainer day={Date.now()} taskList={tasks} />)
    screen.getByText('Task 1')
    screen.getByText('Description 1')
    screen.getByText('Task 2')
    screen.getByText('Description 2')
    screen.getByText('Task 3')
    screen.getByText('Description 3')
  })
})
