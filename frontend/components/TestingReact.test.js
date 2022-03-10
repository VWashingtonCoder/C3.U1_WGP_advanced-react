import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './TestingReact'

beforeEach(() => {
  render(<App date="yesterday" />)
})

afterEach(() => {
  // destroy fake DOM
  // no need, happnens automatically
  window.localStorage.clear()
})

describe('App component', () => {
  test('Renders without crashing', () => {
    // assertions against this fake DOM
    // screen.debug()
  })
  test('Renders the heading', () => {
    // const heading = document.querySelector('h2') // not like this
    const heading = screen.queryByText('Todos:', { exact: false }) // capturing the node
    expect(heading).toBeVisible() // an assertion
    expect(heading).toBeInTheDocument() // another assertion
  })
  test('Renders the heading (grab by test id)', () => {
    const h2 = screen.queryByTestId('todoListHeading')
    expect(h2).toBeVisible() // an assertion
    expect(h2).toBeInTheDocument() // another assertion
  })
  test('Renders the correct date', () => {
    // queryBy -> these return null if the thing is not found
    screen.getByText('yesterday') // getBy -> these fail the test outright if not found
  })
  test('Does NOT render "foo"', () => {
    const notThere = screen.queryByText('foo', { exact: false })
    expect(notThere).not.toBeInTheDocument()
  })
  test('renders first todo', async () => {
    // getBy   // crash imm if not found
    // queryBy // return a big null if not found
    // findBy  // retry for a bit (do not forget async/await)
    const firstTodo = await screen.findByText('walk the dog', { exact: false })
    expect(firstTodo).toBeInTheDocument()
    const secondTodo = await screen.findByText(/learn react/i)
    expect(secondTodo.textContent).toBe('Learn React ✔️')
  })
  test('renders have fun twice', () => {
    screen.getByText('have fun', { exact: false })
  })
})
