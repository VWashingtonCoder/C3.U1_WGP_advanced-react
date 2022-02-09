import React, { useState } from 'react'

export default function App() {
  const [form, setForm] = useState(() => { // callback that returns the initial state
    let initialState = {}
    const foo = window.localStorage.getItem('foo') || ''
    const bar = window.localStorage.getItem('bar') || ''
    return initialState
  })

  const onChange = evt => {
    const { name, value } = evt.target
    window.localStorage.setItem(name, value)
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
