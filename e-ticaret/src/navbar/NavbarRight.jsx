import React from 'react';
import { FaSearchDollar, FaRegHeart } from "react-icons/fa";
import { SlBasketLoaded } from "react-icons/sl";

const NavbarRight = () => {
  return (
    <div className='flex items-center gap-6 font-iconic'>
      {/* Arama kutusu */}
      <div className='flex items-center border p-2 rounded-full bg-gray-200'>
        <input className='bg-gray-200 outline-none p-2' type="text" placeholder='Arama yapınız...' />
        <FaSearchDollar size={24} />
      </div>
      
      {/* Favoriler ikonu */}
      <FaRegHeart size={24} />
      
      {/* Sepet ikonu ve sayısı */}
      <div className='relative flex items-center'>
        <SlBasketLoaded size={24} />
        <div className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs'>
          5
        </div>
      </div>
    </div>
  )
}

export default NavbarRight;

