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
                    <h1 className=' lg:text-[59px] text-[36px] text-[#8BEAAD] font-medium lg:mb-[75px] mb-[20px] ' data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true">Certification</h1>
                    <p className='text-[#F1F1F1] font-sans  font-semibold  leading-[33px] ' data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true">Certified to craft exceptional user experiences, my UI/UX <br /> certification is a testament to my commitment to  <br />  excellence in design. Equipped with the latest industry <br />knowledge and best practices, I bring a strategic and  <br /> user-centric approach to every project. This certification <br /> not only validates my skills but also reflects my <br /> dedication to staying at the forefront of the dynamic <br /> UI/UX landscape.</p>
                </div>
                <div data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true" className="col-span-12 lg:col-span-6 ms-auto lg:mt-0 mt-[30px] img-hover-zoom" >
                    <img src={certificate} alt="" />
                </div>
            </div>
        </>
    )
}

export default Certification    