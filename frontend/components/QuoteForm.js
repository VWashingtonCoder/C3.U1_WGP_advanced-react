import React from 'react'

export default class QuoteForm extends React.Component {
  onSubmit = evt => {
    evt.preventDefault()
  }

  onChange = evt => {
    const { value,  } = evt.target
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onChange} type="text" id="textInput" placeholder="type text" />
        <input onChange={this.onChange} type="text" id="authorInput" placeholder="type author" />
        <input type="submit" />
      </form>
    )
  }
}
