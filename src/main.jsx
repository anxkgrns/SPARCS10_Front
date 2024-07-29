import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NaviBar from './navigation/NaviBar.jsx'
import GlobalStyle from './utils/global.ts'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    
    <GlobalStyle />
    <section>
      
      {/* <Screen /> */}
      {/* <Screen/> */}
      {/* <ChatBot/> */}
    </section>
    <NaviBar/>
  </React.StrictMode>
)
