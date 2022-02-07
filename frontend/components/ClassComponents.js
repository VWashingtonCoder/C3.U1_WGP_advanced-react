import React from 'react'

const initialState = {
  quotes: [{ author: 'Gabe', text: 'Do not troll Gabe' }],
  error: 'Quote not found' // boolean
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>It is working</h2>
      </div>
    )
  }
}
