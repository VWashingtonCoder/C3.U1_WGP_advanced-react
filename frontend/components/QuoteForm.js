import React from 'react'

export default class QuoteForm extends React.Component {
  onSubmit = evt => {
    evt.preventDefault()
    // also needs machinery from above to add a new quote
    this.props.onSubmit()
  }

  onChange = evt => {
    const { value, id } = evt.target
    // I need state changing machinery from above
    this.props.onChange(id, value)
  }

  render() {
    const { values } = this.props
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={values.textInput}
          onChange={this.onChange}
          type="text"
          id="textInput"
          placeholder="type text"
        />
        <input
          value={values.authorInput}
          onChange={this.onChange}
          type="text"
          id="authorInput"
          placeholder="type author"
        />
        <input type="submit" />
      </form>
    )
  }
}
