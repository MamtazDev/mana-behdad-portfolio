import React from 'react'
import logo from '../../assets/logo.svg'
const Footer = () => {
  return (

    <div>
      <div className='bg-black  '>
        <div className="max-w-screen-xl mx-auto">
          <div className='h-[1px] bg-[#FFFFFF4D]'></div>
          <div className='py-[47px] w-full'>
            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} class="h-8" alt="Flowbite Logo" />
              <span class="self-center text-white font-outfit text-2xl font-normal whitespace-nowrap ">MANA BEHDAD</span>
            </a>
          </div>
            <div className='h-[1px] bg-[#FFFFFF4D] mb-[47px]'></div>
            <p className='text-center text-[#FFFFFF80]   pb-[102px] texxt-base font-normal font-sans '>Mana Behdad (c) All Rights Reserved</p>
        </div>


      </div>
    </div>
  )
}

export default Footer