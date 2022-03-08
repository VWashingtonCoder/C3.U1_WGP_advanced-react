import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { renderChild: false }
  }
  toggleChild = () => {
    this.setState({ ...this.state, renderChild: !this.state.renderChild })
  }
  render() {
    return (
      <div>
        <h2>The React Life Cycle</h2>
        <button onClick={this.toggleChild}>toggle child</button>
        {this.state.renderChild && <TheChild lady='gaga' />}
      </div>
    )
  }
}

class TheChild extends React.Component {
  constructor(props) {
    console.log('👉 component being constructed')
    super(props)
    this.state = { count: 0 }
  }
  componentDidMount() { // useEffect(() => {}, [])
    console.log('👉 this happens after 1st DOM surgery')
  }
  componentWillUnmount() { // useEffect(() => { return () => { /* cleanup */ } }, [])
    console.log('👉 component about to be destroyed')
  }
  componentDidUpdate(oldProps, oldState) {
    console.log('👉 this happens after DOM surgeries')
  }
  render() {
    console.log('👉 component rendering')
    return (
      <div>
        <h3>The count is {this.state.count}</h3>
        <button onClick={Function.prototype}>increment</button>
      </div>
    )
  }
}
