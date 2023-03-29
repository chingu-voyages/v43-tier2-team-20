import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './scss/App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  
  return (
    <div className="App">
     <Header/>
     <Contact/>
     <About/>
     <Login/>
     <Register/>
    </div>
  )
}

export default App
