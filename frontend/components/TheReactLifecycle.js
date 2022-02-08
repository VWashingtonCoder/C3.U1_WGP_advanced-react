import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = 'FOO'
  }
  toggleChild = evt => {
    // this.state.renderChild = !this.state.renderChild // NEVAH
    this.setState('BAR')
  }
  render() {
    return (
      <div>
        <h2>The React Life Cycle</h2>
        <button onClick={this.toggleChild}>toggle child</button>
        {
          this.state.renderChild && <TheChild lady='gaga' />
        }
      </div>
    )
  }
}

class TheChild extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }
  render() {
    return (
      <div>
        <h3>The count is {this.state.counter}</h3>
        <button>increment</button>
      </div>
    )
  }
}
