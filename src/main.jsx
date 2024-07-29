import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header/Header.jsx'
import Screen from './navigation/Screen.jsx'
import ChatBot from './chatbot/ChatBot.jsx'
import NaviBar from './navigation/NaviBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <section>
      
      {/* <Screen /> */}
      {/* <Screen/> */}
      {/* <ChatBot/> */}
    </section>
    <NaviBar/>
  </React.StrictMode>,
)
