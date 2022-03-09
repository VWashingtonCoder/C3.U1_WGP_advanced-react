import React, { useState } from 'react'

export function useForm(values) {
  const [form, setForm] = useState(values)
  const onChange = ({ target: { name, value } }) =>
    setForm({ ...form, [name]: value })

  return [form, onChange]
}

export default function App() {
  const [form, onChange] = useForm({ foo: '', bar: '', baz: '' })
  const quoteOfTheDay = useRandomQuote()
  return (
    <form>
      <h2>Custom Hooks</h2>
      <input onChange={onChange} value={form.foo} name="foo" placeholder="type foo" />
      <input onChange={onChange} value={form.bar} name="bar" placeholder="type bar" />
      <input onChange={onChange} value={form.baz} name="baz" placeholder="type baz" />
    </form>
  )
}
