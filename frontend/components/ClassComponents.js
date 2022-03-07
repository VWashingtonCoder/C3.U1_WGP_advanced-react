import React from 'react'
import Form from './QuoteForm'

let idx = 0
const getIdx = () => ++idx

const quotes = [
  { id: getIdx(), author: 'Gabe', text: 'have fun with this' },
  { id: getIdx(), author: 'Paul', text: 'use Postman' },
  { id: getIdx(), author: 'Anne', text: 'test your endpoints' },
]

const initialState = {
  // other slices of state
  errorMessage: '',
  quotes,
  form: {
    text: '',
    author: '',
  }
}

export default class Quotes extends React.Component {
  state = initialState
  
  render() {
    return (
      <div>
        <h2>Quotes: {this.props.foo}</h2>
        <ul>

        </ul>
        <Form />
      </div>
    )
  }
}
