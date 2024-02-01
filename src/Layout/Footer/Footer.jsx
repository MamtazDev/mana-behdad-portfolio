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
        <div className="max-w-screen-xl lg:mx-auto mx-[24px] ">
          <div className='h-[1px] bg-[#FFFFFF4D]'></div>
          <div className='py-[47px] w-full'>
            <div className="flex lg:flex-row flex-col items-center lg:gap-0 gap-[30px] lg:justify-between justify-center " >
              <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} class="h-8" alt="Logo" />
                <span class="self-center text-white font-outfit text-2xl font-normal whitespace-nowrap ">MANA BEHDAD</span>
              </Link>
              <div className='flex  items-center  gap-[20px]'>
                <Link target='blank' to="https://www.linkedin.com/in/mana-behdad-53949141?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> <img src={linkdin} alt="linkdin" /></Link>
                <Link to="mailto:mana.behdad@gmail.com"><img src={email} alt="email" /></Link>
                <Link target='black' to="https://drive.google.com/file/d/1VsqKRVSTcuCiryr9BHbGlpJDBKFNWO08/view?usp=sharing" > <img src={user} alt="user" /></Link>
               
              </div>
            </div>
          </div>
          <div className='h-[1px] bg-[#FFFFFF4D] mb-[47px]'></div>
          <p className='text-center text-[#FFFFFF80] pb-[102px] texxt-base font-normal font-sans '>Mana Behdad &copy;  All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer