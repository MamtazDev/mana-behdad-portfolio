import React from 'react'

const AllSkills = () => {
    return (
        <>
            <div className='text-white'>
                <div className="max-w-screen-xl mx-auto mb-[50px]">
                    <div className='h-[1px] bg-[#FFFFFF4D]'></div>
                    <div className="grid grid-cols-12 py-[93px]">
                        <div className="col-span-12 lg:col-span-3">
                            <div className="flex gap-[8px] items-center ">
                                <h1 className='text-[96px] font-semibold font-sans'>01</h1>
                                <p className='text-[24px] font-sans font-semibold'>My skills</p>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-3">
                            <h1 className='text-[48px] font-outfit font-semibold mb-[20px] '>Design Development</h1>
                            <p className='text-[20px] font-sans font-normal '>Mastering the art of design development, I seamlessly translate concepts into <br /> captivating and user-centric <br /> digital experiences.</p>

                        </div>
                        <div className="col-span-12 lg:col-span-3">
                            <h1 className='text-[48px] font-outfit font-semibold mb-[20px] '>Graphics
                                Design</h1>
                            <p className='text-[20px] font-sans font-normal '>Elevating ideas through graphic design, I bring creativity and precision to visually <br />communicate compelling narratives in the digital realm.</p>

                        </div>
                        <div className="col-span-12 lg:col-span-3">
                            <h1 className='text-[48px] font-outfit font-semibold mb-[20px] '>Project Management</h1>
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