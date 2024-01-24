import React from 'react'
import case_study1 from '../../../assets/case-study.png'
import case_study2 from '../../../assets/case-study2.png'
import arrow from '../../../assets/arrow.png'
import { Link } from 'react-router-dom'

const CaseStudy = () => {

    return (
        <>
            <div className="bg-black pt-[120px] flex justify-center items-center flex-col text-white">
                <div className='mb-[71px]'>
                    <img className='mb-[41px]' src={case_study1} alt="" />
                    <Link to="/firstCaseStudy">
                        <button className='bg-[#131313] rounded-[10px] py-[20px] text-[36px] font-semibold font-sans flex items-center gap-[30px] w-[450px] justify-center'>View Case study  <img src={arrow} alt="" /></button>
                    </Link>
                </div>
                <div className='mb-[120px]'>
                    <img className='mb-[41px]' src={case_study2} alt="" />
                    <Link to="/secondCaseStudy">
                        <button className='bg-[#131313] rounded-[10px] py-[20px] text-[36px] font-semibold font-sans flex items-center gap-[30px] w-[450px] justify-center'>View Case study  <img src={arrow} alt="" /></button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default CaseStudy