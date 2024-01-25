import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTypingEffect } from '../../../hooks/typing-effect';

const WorkBanner = () => {

  AOS.init();
  const text = useTypingEffect("Mana", 500);

  return (
    <div className="text-white work_banner_bg ">
      <div className='max-w-screen-xl mx-auto pt-[189px]'>
        <div className='font-normal font-outfit text-[68px] text-white mb-[36px]  '
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true">
          Hey there, I am    {text} <br />

          <span className='mb-0'>a <span className='text-[#8BEAAD]'> UX/UI</span>
            designer based</span>

          <br /> in San Francisco, CA
        </div>
        <p className='text-[32px] font-outfit font-normal leading-normal' data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true" >
          Architect turned UX/UI enthusiast. I design digita
          <br />  spaces where form meets function, weaving
          <br />
          aesthetics and user experience seamlessly. Join me in
          <br />
          creating visually stunning and intuitively crafted
          <br />
          interfaces that leave a lasting impression.Welcome
          <br />
          to my design journey!
        </p >
      </div >
    </div >
  )
}

export default WorkBanner