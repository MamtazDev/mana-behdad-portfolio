import React from 'react';
import c1 from '../../assets/cc1.png'
import c2 from '../../assets/cc2.png'
import c3 from '../../assets/cc3.png'
import c4 from '../../assets/cc4.png'
import c5 from '../../assets/cc5.png'
import c6 from '../../assets/cc6.png'
import c7 from '../../assets/cc7.png'
import c8 from '../../assets/cc8.png'
import c9 from '../../assets/cc9.png'
import c10 from '../../assets/cc10.png'
import c11 from '../../assets/cc11.png'
import c12 from '../../assets/cc12.png'
import c13 from '../../assets/cc13.png'
import c14 from '../../assets/cc14.png'
import c15 from '../../assets/cc15.png'
import c16 from '../../assets/cc16.png'
import { Link } from 'react-router-dom';
import button2 from '../../assets/button2.png'

const SecondCases = () => {

    return (
        <div>
            <div className='max-w-screen-xl mx-auto lg:mt-[142px] mt-[121px] mb-[96px]'>
                <div className='flex flex-col'>
                    <div className='relative'> <img className='w-full' src={c1} alt="case-study" />
                        <div className='absolute bottom-[20px] md:bottom-[50px] xl:bottom-[108px] left-[18px] lg:left-[50px] '>
                            <Link target="blank" to="https://www.figma.com/proto/nll4j9bpP58VV9zpG8ZsD7/Project-02-(Website-Case-Study)?type=design&node-id=2-2778&t=yA84SqsCoLmFCJhL-1&scaling=min-zoom&page-id=0%3A1&mode=design"> <button >
                                <img className="h-[25px] md:h-[30px] xl:h-auto" src={button2} alt="" />
                            </button></Link>
                        </div>
                    </div>
                    <div > <img className='w-full' src={c2} alt="case-study" /></div>
                    <div > <img className='w-full' src={c3} alt="case-study" /></div>
                    <div > <img className='w-full' src={c4} alt="case-study" /></div>
                    <div > <img className='w-full' src={c5} alt="case-study" /></div>
                    <div > <img className='w-full' src={c6} alt="case-study" /></div>
                    <div > <img className='w-full' src={c7} alt="case-study" /></div>
                    <div > <img className='w-full' src={c8} alt="case-study" /></div>
                    <div > <img className='w-full' src={c9} alt="case-study" /></div>
                    <div > <img className='w-full' src={c10} alt="case_study" /></div>
                    <div > <img className='w-full' src={c11} alt="case_study" /></div>
                    <div > <img className='w-full' src={c12} alt="case_study" /></div>
                    <div > <img className='w-full' src={c13} alt="case_study" /></div>
                    <div > <img className='w-full' src={c14} alt="case_study" /></div>
                    <div > <img className='w-full' src={c15} alt="case_study" /></div>
                    <div > <img className='w-full' src={c16} alt="case_study" /></div>
                </div>
            </div>
        </div>
    )
}

export default SecondCases