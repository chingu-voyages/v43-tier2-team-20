import React from 'react'
import About from '../about/About'
import Contact from '../contact/Contact'
import Login from '../Login'


function Home() {
  return (
    <div>
        <About/>
        <Contact/>
        <Login/>
        <Register/>
    </div>
  )
}

export default Home