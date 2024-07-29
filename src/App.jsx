import { useState } from 'react'
import reactLogo from './assets/images/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BottomNavi from './navigation/Screen'
import NaviBar from './navigation/NaviBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BottomNavi/>
      <NaviBar/>
    </>
  )
}

export default App
