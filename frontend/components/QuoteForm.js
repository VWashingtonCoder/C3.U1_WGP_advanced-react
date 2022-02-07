import React from 'react'

export default class QuoteForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input onChange={this.onChange} value={this.state.textInput} type="text" id="textInput" placeholder="type text" />
        <input onChange={this.onChange} value={this.state.authorInput} type="text" id="authorInput" placeholder="type author" />
        <input type="submit" />
      </form>
    )
  }
}
