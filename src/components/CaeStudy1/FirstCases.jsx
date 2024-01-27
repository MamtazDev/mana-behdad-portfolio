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
import Aos from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
        img: c1
    },
    {
        img: c2
    },
    {
        img: c3
    },
    {
        img: c4
    },
    {
        img: c5
    },
    {
        img: c6
    },
    {
        img: c7
    },
    {
        img: c8
    },
    {
        img: c9
    },
    {
        img: c10
    },
    {
        img: c11
    },
    {
        img: c12
    },
    {
        img: c13
    },
    {
        img: c14
    },
    {
        img: c15
    },
    {
        img: c16
    },

]


const FirstCases = () => {

    Aos.init()

    return (
        <div className='mt-[142px] overflow-hidden '>
            <div className='flex flex-col gap-[24px]'>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  > <img className='w-full' src={c1} alt="case-study" /></div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  > <img className='w-full' src={c2} alt="case-study" /></div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  > <img className='w-full' src={c3} alt="case-study" /></div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  > <img className='w-full' src={c4} alt="case-study" /></div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  > <img className='w-full' src={c5} alt="case-study" /></div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  > <img className='w-full' src={c6} alt="case-study" /></div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  > <img className='w-full' src={c7} alt="case-study" /></div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  > <img className='w-full' src={c8} alt="case-study" /></div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  > <img className='w-full' src={c9} alt="case-study" /></div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  > <img className='w-full' src={c10} alt="case_study" /></div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  > <img className='w-full' src={c11} alt="case_study" /></div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  > <img className='w-full' src={c12} alt="case_study" /></div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  > <img className='w-full' src={c13} alt="case_study" /></div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  > <img className='w-full' src={c14} alt="case_study" /></div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  > <img className='w-full' src={c15} alt="case_study" /></div>
                <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  > <img className='w-full' src={c16} alt="case_study" /></div>
            </div>


        </div>
    )
}

export default FirstCases