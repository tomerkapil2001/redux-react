import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Contactus() {
  return (
    <div>
      <h1>Contact us page</h1>
      <h2>Here we have some other business</h2>
      <Link to="/Company">company</Link><br/>
      <Link to="/Channel">channel</Link><br/>
      <Link to="/Other">other</Link>
      <Outlet/>
    </div>
  )
}

export default Contactus
