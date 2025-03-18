import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { TaskContainer } from '../TaskContainer'
import userEvent from '@testing-library/user-event'

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
    render(<TaskContainer day={day} />)
    screen.getByText(day)
  })

  it('Should render a task list', () => {
    render(<TaskContainer day={Date.now()} tasks={tasks} />)
    screen.getByText('Task 1')
    screen.getByText('Description 1')
    screen.getByText('Task 2')
    screen.getByText('Description 2')
    screen.getByText('Task 3')
    screen.getByText('Description 3')
  })

  it('Should delete a task when clicked', async () => {
    render(<TaskContainer tasks={tasks} />)
    screen.getByText('Task 1')
    const taskElements = screen.getAllByRole('task')
    await userEvent.click(taskElements[0])
    expect(screen.queryByText('Task 1')).toBeNull()
  })
})
