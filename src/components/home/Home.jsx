import React from 'react'
import About from '../about/About'
import Contact from '../contact/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'



function Home() {
  return (
    <>
        <About/>
        <Contact/>
        <Login />
        <Register />
    </>
  )
}

export default Home