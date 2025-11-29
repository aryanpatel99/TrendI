import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <h1 className='w-[max(10%,80px)] text-4xl font-bold'>Admin Panel</h1>
        <button onClick={()=>setToken('')} className='bg-neutral-700 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-neutral-600 active:scale-95'>Logout</button>
    </div>
  )
}

export default Navbar