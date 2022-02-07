import React from 'react'
import axios from 'axios'

const initialState = {
  quotes: [{ author: 'Gabe', text: 'Do not troll Gabe', id: 'xyz' }],
  error: 'No error, everything is cool!',
  textInput: '',
  authorInput: '',
}
const URL = 'http://localhost:9000/api/quotes'

export default class ClassComponent extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = initialState
  //   this.onChange = this.onChange.bind(this)
  // }
  state = initialState

  componentDidMount() { // no arrow func!!
    axios.get(URL)
      .then(res => {
        console.log(res) // res.data.quotes // is where the list of quotes
        this.setState({ ...this.state, quotes: res.data.quotes })
      })
      .catch(err => {
        console.log(err)
        debugger
      })
  }

  onChange = event => { // use arrow function for custom methods
    const { value, id } = event.target
    this.setState({ ...this.state, [`${id}Input`]: value })
  }

  render() {  // no arrow func!!
    console.log('THE STATE ---> ', this.state)
    return (
      <div>
        <h2>It is working</h2>
        <div id="error">Error: {this.state.error}</div>
        <div>Quotes:</div>
        <ul>
          {
            this.state.quotes.map(qo => (
              <li key={qo.id}>{qo.author} sayz {qo.text}</li>
            ))
          }
        </ul>
        <form>
          <input onChange={this.onChange} value={this.state.textInput} type="text" id="text" placeholder="type text" />
          <input onChange={this.onChange} value={this.state.authorInput} type="text" id="author" placeholder="type author" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
