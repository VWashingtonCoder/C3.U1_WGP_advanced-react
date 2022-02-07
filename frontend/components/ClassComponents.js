import React from 'react'

const initialState = {
  quotes: [{ author: 'Gabe', text: 'Do not troll Gabe' }],
  error: 'Quote not found',
}

export default class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = initialState
  // }
  state = initialState

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>It is working</h2>
      </div>
    )
  }
}
