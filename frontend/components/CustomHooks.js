import React, { useState } from 'react'

export default function App() {
  const [form, setForm] = useState('')
  return (
    <form>
      <h2>Custom Hooks</h2>
      <input name="foo" placeholder="type foo" />
      <input name="bar" placeholder="type bar" />
    </form>
  )
}
