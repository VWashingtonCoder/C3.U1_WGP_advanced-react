import React from 'react'
import Form from './QuoteForm'

export default class Quotes extends React.Component {
  render() {
    return (
      <div>
        <h2>Quotes: {this.props.foo}</h2>
        <ul></ul>
        <Form />
      </div>
    )
  }
}
