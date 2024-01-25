import React from 'react'
import logo from '../../assets/logo.svg';
import linkdin from '../../assets/linkdin.png';
import email from '../../assets/email.png';
import user from '../../assets/user.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (

    <>
      <div className='bg-black '>
        <div className="max-w-screen-xl mx-auto lg:mx-0 ">
          <div className='h-[1px] bg-[#FFFFFF4D]'></div>
          <div className='py-[47px] w-full'>
            <div className="flex items-center justify-between" >
              <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} class="h-8" alt="Logo" />
                <span class="self-center text-white font-outfit text-2xl font-normal whitespace-nowrap ">MANA BEHDAD</span>
              </Link>
              <div className='flex  items-center  gap-[20px] '>
                <img src={linkdin} alt="linkdin" />
                <img src={email} alt="email" />
                <img src={user} alt="user" />
              </div>
            </div>
          </div>
          <div className='h-[1px] bg-[#FFFFFF4D] mb-[47px]'></div>
          <p className='text-center text-[#FFFFFF80]   pb-[102px] texxt-base font-normal font-sans '>Mana Behdad (c) All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer