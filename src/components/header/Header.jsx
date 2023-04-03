import React from 'react';
 import logo2 from '../img/budgetlogo2.png'
// import {images} from '../img/index'
function Header() {
  return (
    <>
    <header>
      <nav className='navbar '>
    <div className='logo'>
    <img src={logo2} alt="logo" ></img>
    
    </div>
    <div className='container'>

    <h1>Budget Tracker</h1>
    </div>
    <ul className='nav-items'>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>

    </ul>
    
      </nav>
    </header>
    
    </>
  )
}

export default Header