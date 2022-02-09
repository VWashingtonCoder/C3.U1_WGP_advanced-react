import React, { useState } from 'react'

export default function App() {
  const [form, setForm] = useState(() => {
    let initialState = {}
    if (window.localStorage.getItem('foo')) {
      initialState.foo = window.localStorage.getItem('foo')
    } else {
      initialState.foo = ''
    }
    if (window.localStorage.getItem('bar')) {
      initialState.bar = window.localStorage.getItem('bar')
    } else {
      initialState.bar = ''
    }
    return initialState
  })

  const onChange = evt => {
    const { name, value } = evt.target
    setForm({ ...form, [name]: value })
  }
  return (
    <form>
      <h2>Custom Hooks</h2>
      <input onChange={onChange} value={form.foo} name="foo" placeholder="type foo" />
      <input onChange={onChange} value={form.bar} name="bar" placeholder="type bar" />
    </form>
  )
}
