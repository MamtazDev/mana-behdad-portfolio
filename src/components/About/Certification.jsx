import React from 'react'
import certificate from '../../assets/cirtificate.png'

const Certification = () => {
    return (
        <>
            <div className="grid items-center grid-cols-12 mb-[176px] ">
                <div className="col-span-12 lg:col-span-6">
                    <h1 className=' text-[59px] text-[#8BEAAD] font-medium mb-[75px] '>Certification</h1>
                    <p className='text-[#F1F1F1] font-sans  font-semibold  leading-[33px] '>Certified to craft exceptional user experiences, my UI/UX <br /> certification is a testament to my commitment to  <br />  excellence in design. Equipped with the latest industry <br />knowledge and best practices, I bring a strategic and  <br /> user-centric approach to every project. This certification <br /> not only validates my skills but also reflects my <br /> dedication to staying at the forefront of the dynamic <br /> UI/UX landscape.</p>
                </div>
                <div className="col-span-12 lg:col-span-6 ms-auto">
                    <img src={certificate} alt="" />
                </div>
            </div>
        </>
    )
}

export default Certification    