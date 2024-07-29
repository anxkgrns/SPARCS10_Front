import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BottomNavi from './navigation/Screen'
import ChatBot from './chatbot/ChatBot'
import NaviBar from './navigation/NaviBar'
import Header from './Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='App'>
      </div> */}
      
      <BottomNavi/>
      {/* <ChatBot/> */}
      <NaviBar/>

      
    </>
  )
}

export default App
