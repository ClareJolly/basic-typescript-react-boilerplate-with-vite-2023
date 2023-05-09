import React from 'react'
import RiverContentRenderer from './Embedded'

import './index.css'

export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <RiverContentRenderer url="http://localhost:8000/updated_test.html" />
    </>
  )
}
