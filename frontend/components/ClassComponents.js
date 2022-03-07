import React from 'react'
import Form from './QuoteForm'

let idx = 0
const getIdx = () => ++idx

const quotes = [
  { id: getIdx(), author: 'Gabe', text: 'have fun with this' },
  { id: getIdx(), author: 'Gabe', text: 'have fun with this' },
]

export default class Quotes extends React.Component {
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
