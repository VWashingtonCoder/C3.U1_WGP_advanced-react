import React from 'react'

export default class QuoteForm(props) {

  return (
    <form>
      <input type="text" id="textInput" placeholder="type text" />
      <input type="text" id="authorInput" placeholder="type author" />
      <input type="submit" />
    </form>
  )
}
