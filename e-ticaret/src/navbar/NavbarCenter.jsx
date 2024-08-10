import React from 'react';
import { Link } from 'react-router-dom';

const NavbarCenter = () => {
  return (
    <div className='gap-12 flex items-center font-iconic'>
      <Link to="/Ürünler">
        <button className='hover:underline'>ERKEK</button>
      </Link>
      <h2>KADIN</h2> 
      <h2>ÇOCUK</h2> 
      <h2>YENİLER</h2> 
      <h2>SPORLAR</h2> 
    </div>
  );
}

export default NavbarCenter;
