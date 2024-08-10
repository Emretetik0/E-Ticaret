import React from 'react'
import { Link } from 'react-router-dom';
const NavbarLeft = () => {
  return (
    <div className='text-5xl font-iconic '>
     <Link to="/">
        <button className='hover:underline'>adidas</button>
      </Link>
    </div>
  )
}

export default NavbarLeft
