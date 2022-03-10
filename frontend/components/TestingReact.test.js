import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './TestingReact'

beforeEach(() => {
  render(<App date="tomorrow"/>)
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
    const heading = screen.queryByText('Todos:') // capturing the node
    expect(heading).toBeVisible() // an assertion
    expect(heading).toBeInTheDocument() // another assertion
  })
  test('Renders the heading (grab by test id)', () => {
    const h2 = screen.queryByTestId('todoListHeading')
    expect(h2).toBeVisible() // an assertion
    expect(h2).toBeInTheDocument() // another assertion
  })
  test('Renders the correct date', () => {
    screen.getByText('tomorrow')
  })
})
