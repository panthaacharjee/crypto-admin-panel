import React from 'react'

/* ============ ICONS ========= */
import { FaBars } from "react-icons/fa6";

/* ============ IMAGE ========= */
import profile from "../assets/pro.jpg"



const Navbar = () => {
  return (
    <div className='fixed w-10/12 bg-white px-10 py-3 flex justify-between items-center  shadow-md'>
      <p className='cursor-pointer text-2xl text-[#CB0881]'>
          <FaBars/>
      </p>
      <div className='flex items-center'>
        <div className='rounded-full overflow-hidden border-2 border-[#CB0881]' style={{height:"70px", width:"70px"}}>
          <img src={profile}/>
        </div>
        <div className='ml-4 text-[#CB0881]'>
          <p className='text-lg font-bold uppercase'>Pantha Acharjee</p>
          <p className=''>Admin</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar