import { useState } from 'react'
import './scss/App.css'
import Header from './components/Header'
import Register from './components/Register'

function App() {
  
  return (
    <div className="App">
     <Header/>
    <Home/>
     <Register/>
    </div>
  )
}

export default App
