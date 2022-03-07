import React from 'react'

export default class QuoteForm extends React.Component {
  onSubmit = evt => {
    evt.preventDefault()
  }

  onChange = evt => {
    
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" id="textInput" placeholder="type text" />
        <input type="text" id="authorInput" placeholder="type author" />
        <input type="submit" />
      </form>
    )
  }
}
