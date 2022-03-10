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
})

describe('App component', () => {
  test('Renders without crashing', () => {
    
  })
})
