import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar({totalitem}) {
 
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Link to="/" >Home</Link>
        <Link to="Products" >Product</Link>
        <Link to="About" >About</Link>

        <p>Cart<span>{totalitem}</span></p>
    </div>
  )
}

export default Navbar;
