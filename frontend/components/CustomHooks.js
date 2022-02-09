import React, { useState, useEffect } from 'react'
import axios from 'axios'

const URL = 'http://localhost:9000/api/quotes'

function useQuotes() {
  const [quotes, setQuotes] = useState([])
  useEffect(() => {
    axios.get(URL)
      .then(res => {
        setQuotes(res.data.quotes)
      })
      .catch(err => {
        debugger
      })
  }, [])
  return quotes
}

function useForm(...inputNames) {
  const [form, setForm] = useState(() => { // callback that returns the initial state
    const foo = window.localStorage.getItem(inputNames[0]) || ''
    const bar = window.localStorage.getItem(inputNames[1]) || ''
    const baz = window.localStorage.getItem(inputNames[2]) || ''
    return { foo, bar }
  })
  const onChange = evt => {
    const { name, value } = evt.target
    window.localStorage.setItem(name, value)
    setForm({ ...form, [name]: value })
  }
  return [form, onChange]
}

export default function App() {
  const [form, onChange] = useForm('foo', 'bar', 'baz')
  const quotes = useQuotes()

  return (
    <form>
      <h2>Custom Hooks</h2>
      <input onChange={onChange} value={form.foo} name="foo" placeholder="type foo" />
      <input onChange={onChange} value={form.bar} name="bar" placeholder="type bar" />
      <input onChange={onChange} value={form.baz} name="baz" placeholder="type baz" />
      {
        quotes.map(q => q.text)
      }
    </form>
  )
}
