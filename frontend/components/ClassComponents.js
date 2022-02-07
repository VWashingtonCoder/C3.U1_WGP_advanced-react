import React from 'react'
import axios from 'axios'
import Form from './QuoteForm'

export default class App extends React.Component {
  state = {
    quotes: [],
    error: 'No errors :)',
    authorInput: '',
    textInput: '',
  }

  componentDidMount() {
    axios.get('http://localhost:9000/api/quotes')
      .then(res => {
        this.setState({
          ...this.state,
          quotes: res.data.quotes
        })
      })
      .catch(this.onError)
  }

  onError = (err) => {
    this.setState({
      ...this.state,
      error: err.response.data.message,
    })
  }

  onChange = (evt) => {
    const { value, name } = evt.target
    this.setState({
      ...this.state,
      [`${name}Input`]: value,
    })
  }

  onSubmit = (evt) => {
    evt.preventDefault()
    const payload = { text: this.state.textInput, author: this.state.authorInput }
    axios.post('http://localhost:9000/api/quotes', payload)
      .then(res => {
        this.setState({
          ...this.state,
          error: 'No errorz',
          quotes: res.data.quotes,
          authorInput: '',
          textInput: '',
        })
      })
      .catch(this.onError)
  }

  onDelete = id => () => {
    axios.delete(`http://localhost:9000/api/quotes/${id}`)
      .then(() => {
        this.setState(state => ({
          ...state,
          quotes: state.quotes.filter(qo => qo.id != id)
        }))
      })
      .catch(this.onError)
  }

  render() {
    return (
      <div>
        <div id="error">Error: {this.state.error}</div>
        quotes:
        <ul>
          {
            !!this.state.quotes.length && this.state.quotes.map(quote => (
              <li key={quote.id}>
                <p><button onClick={this.onDelete(quote.id)}>delete</button>{quote.author} sayz {quote.text}</p>
              </li>
            ))
          }
        </ul>
        <Form
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          authorInput={this.state.authorInput}
          textInput={this.state.textInput}
        />
      </div>
    )
  }
}
