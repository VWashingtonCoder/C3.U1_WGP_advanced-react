import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './TestingReact'

beforeEach(() => {
  render(<App />)
})
afterEach(() => {
  document.body.innerHTML = ''
})

describe('<App />', () => {
  test('renders without errors', () => {
    // screen.debug()
  })
  test('Todos: text renders', () => {
    const element = screen.queryByText('Todos:')
    expect(element).toBeInTheDocument()
  })
  test('Todos: text renders', () => {
    screen.getByText('todos:', { exact: false })
  })
  test('Todos: text renders', () => {
    const h2 = document.querySelector('h2')
    expect(h2.textContent).toMatch(/todos/i)
    expect(h2).toBeInTheDocument()
    expect(h2).toBeVisible()
  })
  test('Todos: text renders', () => {
    screen.getByTestId('todoListHeading')
  })
  test('Submit button disabled while input empty', () => {
    const submitButton = screen.getByText('Submit Todo')
    expect(submitButton).toBeDisabled()
  })
  test('Typing a character enables the input', () => {
    const submitButton = screen.getByText('Submit Todo')
    const input = screen.getByPlaceholderText('Type todo')
    fireEvent.change(input, { target: { value: 'a' } })
    expect(submitButton).toBeEnabled()
  })
  test('Can complete a todo', () => {
    let walkDog = screen.getByText('Walk the dog')
    fireEvent.click(walkDog)
    expect(walkDog.textContent).toBe('Walk the dog ✔️')
  })
  test('Can submit new todo', () => {
    const input = screen.getByPlaceholderText('Type todo')
    const submitButton = screen.getByText('Submit Todo')
    fireEvent.change(input, { target: { value: 'Use Postman' } })
    fireEvent.click(submitButton)
    screen.getByText('Use Postman')
  })
  test('Can hide completed', () => {
    const hideShowButton = screen.getByText('Hide Completed')
    screen.getByText('Walk the dog')
    screen.getByText('Learn React', { exact: false })
    screen.getByText('Have fun')
    fireEvent.click(hideShowButton)
    screen.getByText('Walk the dog')
    screen.getByText('Have fun')
    const gone = screen.queryByText('Learn React', { exact: false })
    expect(gone).not.toBeInTheDocument()
  })
})
