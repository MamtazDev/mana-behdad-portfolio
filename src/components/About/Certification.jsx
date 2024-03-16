import React from 'react'
import certificate from '../../assets/cirtificate.png'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Certification = () => {

    AOS.init()

    return (
        <>
            <div className="grid items-center grid-cols-12 lg:mb-[176px] mb-[80px] ">
                <div className="col-span-12 lg:col-span-6" >
                    <h1 className=' lg:text-[59px] text-[36px] text-[#8BEAAD] font-medium lg:mb-[75px] mb-[20px] lg:text-start text-center '>Certification</h1>
                    <p className='text-[#F1F1F1] font-sans  font-semibold  leading-[33px] lg:text-start text-center '>Certified to craft exceptional user experiences, my UI/UX <br className='lg:flex hidden ' /> certification is a testament to my commitment to  <br className='lg:flex hidden ' />  excellence in design. Equipped with the latest industry <br className='lg:flex hidden ' />knowledge and best practices, I bring a strategic and  <br className='lg:flex hidden ' /> user-centric approach to every project. This certification <br className='lg:flex hidden ' /> not only validates my skills but also reflects my <br className='lg:flex hidden ' /> dedication to staying at the forefront of the dynamic <br className='lg:flex hidden ' /> UI/UX landscape.</p>
                </div>
                <div className="col-span-12 lg:col-span-6 ms-auto lg:mt-0 mt-[30px] " >
                    <img src={certificate} alt="" />
                </div>
            </div>
        </>
    )
}

export default Certification    