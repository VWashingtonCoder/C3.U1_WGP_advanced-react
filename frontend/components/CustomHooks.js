import React, { useState, useEffect } from 'react'

import {
  useQuotes,
  useFormImproved,
  useForm,
  useStateLS
} from './custom'

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
        // data.map(fr => fr)
      }
    </form>
  )
}
