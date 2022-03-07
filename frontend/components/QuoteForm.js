import React from 'react'

export default class QuoteForm extends React.Component {
  onSubmit = evt => {
    evt.preventDefault()
    console.log('submitting!')
  }

  onChange = evt => {
    const { value, id } = evt.target
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
