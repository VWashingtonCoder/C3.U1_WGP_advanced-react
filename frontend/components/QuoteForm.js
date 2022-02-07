import React from 'react'

export default class QuoteForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input onChange={this.props.onChange} value={this.props.textInput} type="text" id="textInput" placeholder="type text" />
        <input onChange={this.props.onChange} value={this.props.authorInput} type="text" id="authorInput" placeholder="type author" />
        <input type="submit" />
      </form>
    )
  }
}
