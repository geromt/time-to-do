import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { App } from '../App.jsx'
import userEvent from '@testing-library/user-event'

describe('App', () => {
  afterEach(cleanup)

  it('Should add a new task when data is provided and button is click', async () => {
    render(<App />)
    const initTime = screen.queryByPlaceholderText('start at')
    const endTime = screen.queryByPlaceholderText('ends at')
    const name = screen.queryByPlaceholderText('name')
    const description = screen.queryByPlaceholderText('description')
    await userEvent.type(initTime, '7')
    await userEvent.type(endTime, '8')
    await userEvent.type(name, 'task')
    await userEvent.type(description, 'description')
    await userEvent.click(screen.queryByRole('button'))

    // const task = screen.queryByRole('task')
    const interval = screen.queryByRole('interval')
    const taskName = screen.queryByRole('name')

    expect(interval.innerText).toBe('7-8')
    expect(taskName.innerText).toBe('task')
  })

  it('Should delete a task when clicked', async () => {
    render(<App />)
    const initTime = screen.queryByPlaceholderText('start at')
    const endTime = screen.queryByPlaceholderText('ends at')
    const name = screen.queryByPlaceholderText('name')
    const description = screen.queryByPlaceholderText('description')
    await userEvent.type(initTime, '7')
    await userEvent.type(endTime, '8')
    await userEvent.type(name, 'task')
    await userEvent.type(description, 'description')
    await userEvent.click(screen.queryByRole('button'))

    const task = screen.queryByRole('task')
    await userEvent.click(task)
    expect(screen.queryByRole('task')).toBeNull()
  })
})
