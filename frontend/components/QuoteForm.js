import React from 'react'

export default class QuoteForm extends React.Component {
  onSubmit = evt => {
    evt.preventDefault()
    console.log('submitting!')
  }

  onChange = evt => {
    const { value, id } = evt.target
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
