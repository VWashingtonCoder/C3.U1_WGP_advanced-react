import React, { useState } from 'react'

export default function App() {
  const [form, setForm] = useState({
    foo: '',
    bar: '',
  })
  const onChange = evt => {
    const { name, value } = evt.target
    setForm({ ...form, [name]: value })
  }
  return (
    <form>
      <h2>Custom Hooks</h2>
      <input onChange={onChange} name="foo" placeholder="type foo" />
      <input onChange={onChange} name="bar" placeholder="type bar" />
    </form>
  )
}
