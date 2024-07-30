import { useState } from 'react'
import './App.css'
import NaviBar from './navigation/NaviBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NaviBar/>
    </>
  )
}

export default App
