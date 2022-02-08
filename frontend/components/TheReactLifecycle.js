import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { renderChild: false }
  }
  toggleChild = () => {
    // this.state.renderChild = !this.state.renderChild // NEVER DO ANYTHING LIKE THIS
    // this.setState({ ...this.state, renderChild: !this.state.renderChild })
    this.setState(currState => ({ ...currState, renderChild: !currState.renderChild }))
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
    this.state = { counter: 0, error: '', favToys: [] }
  }
  increment = evt => {
    this.setState((state) => ({
      ...state,
      counter: state.counter + 1,
    }))
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
