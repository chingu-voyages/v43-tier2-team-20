import React from 'react';
import logo from './img/budgetlogo2.png'

function Header() {
  return (
    <>
    <nav className='menu-nav'>

    <h1 className='title'>Budget Tracker</h1>
    <ul>
      <li><a href="#">Home</a></li>
    </ul>
    </nav>
    <img src={logo}className='logo' alt='logo' />
    </>
  )
}

export default Header