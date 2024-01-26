import React from 'react'
import case_study1 from '../../../assets/case-study.png'
import case_study2 from '../../../assets/case-study2.png'
import arrow from '../../../assets/arrow.png'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';

const CaseStudy = () => {
    
    Aos.init();
    
    return (
        <>
            <div className="bg-black pt-[120px] flex justify-center items-center flex-col text-white lg:m-0 m-[24px] overflow-auto">
                <div className='mb-[71px]'>
                    <div data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true" className='w-full img-hover-zoom'>
                        <img className='mb-[41px] w-full' src={case_study1} alt="" />
                    </div>
                    <div className="text-center">
                        <Link to="/firstCaseStudy" data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true">
                            <button className='bg-[#131313] hover:bg-[#212020] transition ease-in-out delay-150  rounded-[10px] lg:py-[20px] py-[15px] lg:px-0 px-[15px] lg:text-[36px] text-[24px] font-semibold font-sans flex items-center  justify-center  lg:gap-[30px] gap-[10px]   lg:w-[450px] w-100% '><span>View Case study </span> <img src={arrow} className='lg:w-[48px] lg:h-[48px] w-[30px] h-[30px]' alt="arrow" /></button>
                        </Link>
                    </div>
                </div>
                <div className='mb-[120px]'>
                    <div data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true" className='w-full overflow-x-hidden img-hover-zoom'>
                        <img className='mb-[41px] w-full' src={case_study2} alt="" />
                    </div>
                    <Link to="/secondCaseStudy" data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true">
                        <button className='bg-[#131313] hover:bg-[#212020] transition ease-in-out delay-150  rounded-[10px] lg:py-[20px] py-[15px] lg:px-0 px-[15px] lg:text-[36px] text-[24px] font-semibold font-sans flex items-center  justify-center  lg:gap-[30px] gap-[10px]   lg:w-[450px] w-100% '><span>View Case study </span> <img src={arrow} className='lg:w-[48px] lg:h-[48px] w-[30px] h-[30px]' alt="arrow" /></button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default CaseStudy