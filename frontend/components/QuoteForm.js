import React from 'react'

export default class QuoteForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
      <input onChange={this.props.onChange} value={this.props.authorInput} type="text" name="author" placeholder="type author"></input>
      <input onChange={this.props.onChange} value={this.props.textInput} type="text" name="text" placeholder="type text"></input>
      <input type="submit"></input>
    </form>
    )
  }
}
