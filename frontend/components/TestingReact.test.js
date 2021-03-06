import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './TestingReact'

const todoInput = () => screen.getByPlaceholderText('Type todo')
const submitBtn = () => screen.getByText('Submit Todo')

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
    // findBy  // retry for a bit (do not forget async/await) otherwise fail test outright
    const firstTodo = await screen.findByText('walk the dog', { exact: false })
    expect(firstTodo).toBeInTheDocument()
    const secondTodo = await screen.findByText(/learn react/i)
    expect(secondTodo.textContent).toBe('Learn React ✔️')
  })
  test('renders have fun twice', () => {
    const haveFuns = screen.getAllByText('have fun', { exact: false })
    haveFuns.forEach(todo => {
      expect(todo).toBeVisible()
    })
    expect(haveFuns).toHaveLength(2)
  })
  test('submit button is disabled until we type one char', () => {
    // capture button
    const submitBtn = screen.getByText('Submit Todo')
    // assert it's disabled
    expect(submitBtn).toBeDisabled()
    // capture input
    const input = screen.getByPlaceholderText('Type todo')
    // type on input
    fireEvent.change(input, { target: { value: 'a' } })
    // assert that input acquired the value
    expect(input).toHaveValue('a')
    // assert that btn is enabled now
    expect(submitBtn).toBeEnabled()
    // type on input
    fireEvent.change(input, { target: { value: 'ab' } })
    // assert that input acquired the value
    expect(input).toHaveValue('ab')
  })
  test('we can submit a new todo and it renders to the screen and clears input', async () => {
    fireEvent.change(todoInput(), { target: { value: 'Have LOTS of fun' } })
    fireEvent.click(submitBtn())
    await screen.findByText('Have LOTS of fun')
  })
})
