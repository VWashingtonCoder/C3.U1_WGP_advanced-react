import React from 'react'

export default class QuoteForm extends React.Component {

  render() {
    return (
      <form>
        <input type="text" id="textInput" placeholder="type text" />
        <input type="text" id="authorInput" placeholder="type author" />
        <input type="submit" />
      </form>
    )
  }
}
