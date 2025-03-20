import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { InsertForm } from '../InsertForm'
import userEvent from '@testing-library/user-event'

describe('InsertForm', () => {
  const handleClickMock = vi.fn()

  afterEach(cleanup)

  it('Should render InsertForm', () => {
    render(<InsertForm />)
  })

  it('Should have input for the init time', () => {
    render(<InsertForm />)
    screen.getByPlaceholderText('start at')
  })

  it('Should have input for the end time', () => {
    render(<InsertForm />)
    screen.getByPlaceholderText('ends at')
  })

  it('Should have an input for the name', () => {
    render(<InsertForm />)
    screen.getByPlaceholderText('name')
  })

  it('Should have an input for the description', () => {
    render(<InsertForm />)
    screen.getByPlaceholderText('description')
  })

  it('Should have a button to add the taks', () => {
    render(<InsertForm />)
    const addButton = screen.queryByRole('button')
    expect(addButton.innerText).toBe('Add')
  })

  it('Shold call handleAdd function when button is clicked', async () => {
    render(<InsertForm handleAdd={() => handleClickMock('calling...')} />)
    const addButton = screen.queryByRole('button')
    await userEvent.click(addButton)
    expect(handleClickMock.mock.calls[0]).toStrictEqual(['calling...'])
  })
})
