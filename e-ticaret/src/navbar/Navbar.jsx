import React from 'react'
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'
import NavbarCenter from './NavbarCenter'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-white px-10 py-3'>
      <NavbarLeft/>
      <NavbarCenter/>
      <NavbarRight/>
    </div>
  )
}

export default Navbar
