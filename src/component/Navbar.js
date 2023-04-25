import React from 'react'
import {Link,NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div className='active'>
      <ul className='navbar'>
      <li><NavLink className='nav-to' to="/">Home</NavLink></li>
      <li><NavLink className='nav-to' to="/about">About</NavLink></li>
      <li><NavLink className='nav-to' to='/contact'>Contact</NavLink></li>
      <li><NavLink className='nav-to' to='/User/kapil'>Kapil</NavLink></li>
      <li><NavLink className='nav-to' to='/user/peter'>Peter</NavLink></li>
      <li><NavLink className='nav-to' to='/Filter'>Filter</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
