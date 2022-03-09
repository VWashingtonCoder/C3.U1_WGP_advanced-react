import React, { useState } from 'react'

function useForm(values) {
  const [form, setForm] = useState({ foo: '', bar: '', baz: '' })
  const onChange = ({ target: { name, value } }) =>
    setForm({ ...form, [name]: value })
}

export default function App() {

  return (
    <form>
      <h2>Custom Hooks</h2>
      <input onChange={onChange} value={form.foo} name="foo" placeholder="type foo" />
      <input onChange={onChange} value={form.bar} name="bar" placeholder="type bar" />
      <input onChange={onChange} value={form.baz} name="baz" placeholder="type baz" />
    </form>
  )
}
