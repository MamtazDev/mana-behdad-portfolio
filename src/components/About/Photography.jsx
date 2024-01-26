import React from 'react'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'
import p5 from '../../assets/p5.png'
import p6 from '../../assets/p6.png'

const Photography = () => {

    return (

        <div className='mb-[81px]'>
            <h2 className='text-[36px] font-Oswald  font-normal text-[#8BEAAD] mb-[19px]'>Photography</h2>
            <p className='text-[24px] font-normal font-sans mb-[35px] '>Step into the human tapestry captured through my lens. In the photography section, faces become stories, and moments turn into emotions frozen in time.</p>
            <div className='grid grid-cols-12 gap-[45px]'>
                <div className="col-span-12 lg:col-span-4 img-hover-zoom">
                    <img src={p1} alt="" />
                </div>
                <div className="col-span-12 lg:col-span-4 img-hover-zoom">
                    <img src={p2} alt="" />
                </div>
                <div className="col-span-12 lg:col-span-4 img-hover-zoom">
                    <img src={p3} alt="" />
                </div>
                <div className="col-span-12 lg:col-span-4 img-hover-zoom">
                    <img src={p4} alt="" />
                </div>
                <div className="col-span-12 lg:col-span-4 img-hover-zoom">
                    <img src={p5} alt="" />
                </div>
                <div className="col-span-12 lg:col-span-4 img-hover-zoom">
                    <img src={p6} alt="" />
                </div>

            </div>
        </div>

    )
}

export default Photography