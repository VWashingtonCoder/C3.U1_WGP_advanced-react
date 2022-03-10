import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './TestingReact'

beforeEach(() => {
  render(<App />)
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
  test('Renders heading "Todos:"', () => {
    // const heading = document.querySelector('h2') // not like this
    const heading = screen.queryByText('Todos:')
    console.log(heading)
  })
})
