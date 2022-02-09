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
    let initialState = {}
    inputNames.forEach(name => {
      initialState[name] = window.localStorage.getItem(name) || ''
    })
    return initialState
  })
  const onChange = evt => {
    const { name, value } = evt.target
    window.localStorage.setItem(name, value)
    setForm({ ...form, [name]: value })
  }
  return [form, onChange]
}

function useStateLS(key, initialValue) {
  const setIt = val => window.localStorage.setItem(key, JSON.stringify(val))
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    if (item) {
      return JSON.parse(item)
    }
    setIt(initialValue)
    return initialValue
  })
  const setValueLS = newValue => {
    setIt(newValue)
    setValue(newValue)
  }
  // we need a better setValue that actually stores to LS
  return [value, setValueLS]
}

function useFormImproved(key, formValues) {
  const [form, setForm] = useStateLS(key, formValues)
  const onChange = evt => {
    const { name, value } = evt.target
    window.localStorage.setItem(key, )
  }
  return [form, onChange]
}

export default function App() {
  // const [form, onChange] = useForm('foo', 'bar', 'baz')
  const [form, onChange] = useFormImproved('theform', { foo: '', bar: '', baz: '' })
  const [fruits, setFruits] = useStateLS('fruits', ['apple', 'orange'])
  const quotes = useQuotes()

  return (
    <form>
      <h2>Custom Hooks</h2>
      <input onChange={onChange} value={form.foo} name="foo" placeholder="type foo" />
      <input onChange={onChange} value={form.bar} name="bar" placeholder="type bar" />
      <input onChange={onChange} value={form.baz} name="baz" placeholder="type baz" />
      {
        // quotes.map(q => q.text)
        data.map(fr => fr)
      }
    </form>
  )
}
