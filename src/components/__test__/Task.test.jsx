import { afterEach, describe, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Task } from '../Task'

describe('Task', () => {
  afterEach(cleanup)

  it('Should show interval', () => {
    render(<Task />)
    screen.getByRole('interval')
  })

  it('Should show specific time interval', () => {
    render(<Task initTime={7} endTime={8} />)
    screen.getByText('7-8')
  })

  it('Should show task name', () => {
    const taskName = 'This a task'
    render(<Task name={taskName} />)
    screen.getByText(taskName)
  })

  it('Should show description', () => {
    const testDescription = 'This is a description'
    render(<Task description={testDescription} />)
    screen.getByText(testDescription)
  })
})
