import React, { useState } from 'react'

export default function App() {
  const [form, setForm] = useState(() => {
    
    if (window.localStorage.getItem('foo')) {

    }
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
