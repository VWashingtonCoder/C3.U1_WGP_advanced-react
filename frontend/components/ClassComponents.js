import React from 'react'
import axios from 'axios'
import Form from './QuoteForm'

export default function Quotes(props) {
  return (
    <div>
      <h2>It is working</h2>
      <div>Quotes:</div>
      <ul></ul>
      <Form />
    </div>
  )
}
