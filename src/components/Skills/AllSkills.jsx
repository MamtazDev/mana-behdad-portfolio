import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllSkills = () => {

    AOS.init();

    return (
        <>
            <div className='text-white'>
                <div className="max-w-screen-xl mx-auto mb-[50px]">
                    <div className='h-[1px] bg-[#FFFFFF4D]'></div>
                    <div className="grid grid-cols-12 py-[93px]">
                        <div className="col-span-12 lg:col-span-3 lg:mb-0 mb-[30px]" data-aos="fade-top"
                            data-aos-offset="200"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true">
                            <div className="flex gap-[8px] items-center ">
                                <h1 className='lg:text-[96px] text-[70px] font-semibold font-sans'>01</h1>
                                <p className='text-[24px] font-sans font-semibold'>My skills</p>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-3 lg:mb-0 mb-[30px]" data-aos="fade-bottom"
                            data-aos-offset="200"
                            data-aos-delay="500"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true">
                            <h1 className='lg:text-[48px] text-[36px] font-outfit font-semibold lg:mb-[20px] mb-[10px] '>Design Development</h1>
                            <p className='text-[20px] font-sans font-normal '>Mastering the art of design development, I seamlessly translate concepts into <br /> captivating and user-centric <br /> digital experiences.</p>

                        </div>
                        <div className="col-span-12 lg:col-span-3 lg:mb-0 mb-[30px]" data-aos="fade-top"
                            data-aos-offset="200"
                            data-aos-delay="1000"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true">
                            <h1 className='lg:text-[48px] text-[36px] font-outfit font-semibold lg:mb-[20px] mb-[10px] '>Graphics
                                Design</h1>
                            <p className='text-[20px] font-sans font-normal '>Elevating ideas through graphic design, I bring creativity and precision to visually <br />communicate compelling narratives in the digital realm.</p>
                        </div>
                        <div className="col-span-12 lg:col-span-3 lg:mb-0 mb-[30px]" data-aos="fade-bottom"
                            data-aos-offset="200"
                            data-aos-delay="1500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true">
                            <h1 className='lg:text-[48px] text-[36px] font-outfit font-semibold lg:mb-[20px] mb-[10px] '>Project Management</h1>
                            <p className='text-[20px] font-sans font-normal'>As a project management enthusiast, I orchestrate seamless workflows and timelines, ensuring the successful delivery of exceptional UI/UX solutions.</p>
                        </div>
                    </div>
                    <div className='h-[1px] bg-[#FFFFFF4D]'></div>
                </div>
            </div>
        </>
    )
}

export default AllSkills