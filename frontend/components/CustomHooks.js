import React, { useState } from 'react'

function useForm() {
  const [form, setForm] = useState(() => { // callback that returns the initial state
    const foo = window.localStorage.getItem('foo') || ''
    const bar = window.localStorage.getItem('bar') || ''
    return { foo, bar }
  })
  const onChange = evt => {
    const { name, value } = evt.target
    window.localStorage.setItem(name, value)
    setForm({ ...form, [name]: value })
  }
}

export default function App() {
  return (
    <form>
      <h2>Custom Hooks</h2>
      <input onChange={onChange} value={form.foo} name="foo" placeholder="type foo" />
      <input onChange={onChange} value={form.bar} name="bar" placeholder="type bar" />
    </form>
  )
}
