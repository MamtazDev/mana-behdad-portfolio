import React from 'react'
import c1 from '../../assets/c1.svg'
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.png'
import c5 from '../../assets/c5.png'
import c6 from '../../assets/c6.png'
import c7 from '../../assets/c7.png'
import c8 from '../../assets/c8.png'
import c9 from '../../assets/c9.png'
import c10 from '../../assets/c10.png'
import c11 from '../../assets/c11.png'
import c12 from '../../assets/c12.png'
import c13 from '../../assets/c13.png'
import c14 from '../../assets/c14.png'
import c15 from '../../assets/c15.png'
import c16 from '../../assets/c16.png'
import button1 from '../../assets/button1.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'


const FirstCases = () => {

  Aos.init()

  return (
    <div className='max-w-screen-xl mx-auto mt-[142px] overflow-hidden '>

      <div className='flex flex-col gap-[24px]'>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className='relative'
        >
          <img className='w-full border border-black' src={c1} alt="case-study" />
          <div className='absolute bottom-[114px] left-[50px] '>
            <Link target='blank' to="https://www.figma.com/proto/d3rAuI8yfij5Yofn3xr0Mg/App-Case-Study-(Portfolio-Work)?type=design&node-id=2-5367&t=ToyhalCdxpkVmR8q-1&scaling=min-zoom&page-id=2%3A2226&mode=design"> <button className='h-[66px]'>
              <img src={button1} alt="" />
            </button></Link>
          </div>
        </div>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        > <img className='w-full border border-black' src={c2} alt="case-study" /></div>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        > <img className='w-full border border-black' src={c3} alt="case-study" /></div>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        > <img className='w-full border border-black' src={c4} alt="case-study" /></div>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        > <img className='w-full border border-black' src={c5} alt="case-study" /></div>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        > <img className='w-full border border-black' src={c6} alt="case-study" /></div>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        > <img className='w-full border border-black' src={c7} alt="case-study" /></div>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        > <img className='w-full border border-black' src={c8} alt="case-study" /></div>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        > <img className='w-full border border-black' src={c9} alt="case-study" /></div>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        > <img className='w-full border border-black' src={c10} alt="case_study" /></div>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        > <img className='w-full border border-black' src={c11} alt="case_study" /></div>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        > <img className='w-full border border-black' src={c12} alt="case_study" /></div>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        > <img className='w-full border border-black' src={c13} alt="case_study" /></div>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        > <img className='w-full border border-black' src={c14} alt="case_study" /></div>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        > <img className='w-full border border-black' src={c15} alt="case_study" /></div>
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        > <img className='w-full border border-black' src={c16} alt="case_study" /></div>
      </div>


    </div>
  )
}

export default FirstCases