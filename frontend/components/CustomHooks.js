import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function useForm(values) {
  const [form, setForm] = useState(values)
  const onChange = ({ target: { name, value } }) =>
    setForm({ ...form, [name]: value })

  return [form, onChange]
}

export function useRandomQuote() {
  const [quote, setQuote] = useState({})

  useEffect(() => {
    getQuotes()
  }, [])

  function getQuotes() {
    axios.get('http://localhost:9000/api/quotes')
      .then(res => {
        const allQuotes = res.data.quotes
        const numberOfQuotes = allQuotes.length
        const randomNumber = Math.floor(Math.random() * numberOfQuotes)
        setQuote(allQuotes[randomNumber])
      })
      .catch(err => {
        debugger
      })
  }

  return quote.text
}

export default function App() {
  const [form, onChange] = useForm({ foo: '', bar: '', baz: '' })
  const quoteOfTheDay = useRandomQuote()

  return (
    <form>
      <h2>Custom Hooks {quoteOfTheDay}</h2>
      <input onChange={onChange} value={form.foo} name="foo" placeholder="type foo" />
      <input onChange={onChange} value={form.bar} name="bar" placeholder="type bar" />
      <input onChange={onChange} value={form.baz} name="baz" placeholder="type baz" />
    </form>
  )
}
