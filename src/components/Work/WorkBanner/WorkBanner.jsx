import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ReactTyped } from "react-typed";

const WorkBanner = () => {
  AOS.init();
  return (
    <div className="text-white work_banner_bg lg:px-0  px-[24px]">
      <div className='max-w-screen-xl mx-auto pt-[189px]'>
        <div className='font-normal font-outfit  lg:text-start  text-center lg:text-[68px] text-[40px] text-white mb-[36px]  '
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true">
          Hey there, I am <br className='lg:hidden visited:' />
          <ReactTyped strings={["Mana"]} typeSpeed={150}
            backSpeed={150} loop /> <br className='' />
          a <span className='text-[#8BEAAD]'> UX/UI</span>
          designer based
          <br className='hidden lg:flex' /> in San Francisco, CA
        </div>
        <p className='lg:text-[32px] text-[24px] font-outfit font-normal leading-normal lg:text-start  text-center overflow-x-hidden' data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true">
          Architect turned UX/UI enthusiast. I design digita
          <br className='hidden lg:flex' />  spaces where form meets function, weaving
          <br className='hidden lg:flex' />
          aesthetics and user experience seamlessly. Join me in
          <br className='hidden lg:flex' />
          creating visually stunning and intuitively crafted
          <br className='hidden lg:flex' />
          interfaces that leave a lasting impression.Welcome
          <br className='hidden lg:flex' />
          to my design journey!
        </p>
      </div>
    </div>
  )
}

export default WorkBanner