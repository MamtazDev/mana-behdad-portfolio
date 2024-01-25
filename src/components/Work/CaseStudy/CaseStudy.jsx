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
            <div className="bg-black pt-[120px] flex justify-center items-center flex-col text-white">
                <div className='mb-[71px]'>
                    <img data-aos="fade-bottom"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true" className='mb-[41px]' src={case_study1} alt="" />
                    <Link to="/firstCaseStudy" data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true">
                        <button className='bg-[#131313] hover:bg-[#212020] transition ease-in-out delay-150  rounded-[10px] py-[20px] text-[36px] font-semibold font-sans flex items-center gap-[30px] w-[450px] justify-center'>View Case study  <img src={arrow} alt="" /></button>
                    </Link>
                </div>
                <div className='mb-[120px]'>
                    <img data-aos="fade-bottom"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true" className='mb-[41px]' src={case_study2} alt="" />
                    <Link to="/secondCaseStudy" data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true">
                        <button className='bg-[#131313] hover:bg-[#212020] transition ease-in-out delay-150 rounded-[10px] py-[20px] text-[36px] font-semibold font-sans flex items-center gap-[30px] w-[450px] justify-center'>View Case study  <img src={arrow} alt="" /></button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default CaseStudy