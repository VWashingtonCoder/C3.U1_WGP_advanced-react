import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ClassComponents from './components/ClassComponents'
import TheReactLifecycle from './components/TheReactLifecycle'
import UseEffectHook from './components/UseEffectHook'
import TestingReact from './components/TestingReact'
import './styles/reset.css'
import './styles/styles.css'

render(
  <BrowserRouter>
    <React.StrictMode>
      <h1>Unit 3.1 - Advanced React</h1>
      <nav>
        <NavLink to="/">Class Components</NavLink>
        <NavLink to="/react-lifecycle">The React Life Cycle</NavLink>
        <NavLink to="/use-effect-hook">The useEffect Hook</NavLink>
        <NavLink to="/testing-react">Testing React</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ClassComponents />} />
        <Route path="/react-lifecycle" element={<TheReactLifecycle />} />
        <Route path="/use-effect-hook" element={<UseEffectHook />} />
        <Route path="/testing-react" element={<TestingReact />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
  , document.getElementById('root')
)
