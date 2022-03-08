import React from 'react'
import Form from './QuoteForm'

let idx = 0
const getIdx = () => ++idx

const quotes = [
  { id: getIdx(), author: 'Gabe', text: 'have fun with this' },
  { id: getIdx(), author: 'Paul', text: 'use Postman' },
  { id: getIdx(), author: 'Anne', text: 'test your endpoints' },
]

const initialState = {
  errorMessage: '',
  quotes,
  form: {
    textInput: '',
    authorInput: '',
  }
}

export default class Quotes extends React.Component {
  state = initialState

  destroy = id => {
    console.log('clicking to destroy the following id!', id)
    this.setState({
      ...this.state, quotes: this.state.quotes.filter(quote => quote.id !== id)
    })
  }

  capitalizeAuthor = id => {
    this.setState({
      ...this.state, quotes: this.state.quotes.map(quote => {
        return quote.id === id
          ? { ...quote, author: quote.author.toUpperCase() }
          : quote
      })
    })
  }

  changeInput = (key, value) => {
    this.setState({
      ...this.state,
      form: { ...this.state.form, [key]: value },
    })
  }

  addQuote = () => {
    const { quotes, form: { textInput, authorInput } } = this.state
    const newQuote = { id: getIdx(), text: textInput, author: authorInput }
    this.setState({
      ...this.state,
      form: initialState.form,
      quotes: [...quotes, newQuote],
    })
  }

  render() { // traditional method syntax for functions that come with React
    console.log('props are', this.props)
    console.log('state is', this.state)
    const { quotes, form } = this.state
    const { foo } = this.props
    return (
      <div>
        <h2>Quotes: {foo}</h2>
        <ul>
          {
            quotes.map((quote) => {
              const { id, text, author } = quote
              return (
                <li className='qt' key={id}>
                  {author} says {text}
                  <button onClick={evt => this.destroy(id)}>del</button>
                  <button onClick={evt => this.capitalizeAuthor(id)}>capitalize!</button>
                </li>
              )
            })
          }
        </ul>
        <Form onChange={this.changeInput} values={form} onSubmit={this.addQuote} />
      </div>
    )
  }
}
