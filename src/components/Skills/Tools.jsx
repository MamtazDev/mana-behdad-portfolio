import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Tools = () => {
    const percentage = 80;

    return (
        <>
            <div className="max-w-screen-xl mx-auto mb-[120px]">
                <div className="text-white flex gap-[8px] items-center mb-[24px]">
                    <h1 className='text-[96px] font-semibold font-sans'>02</h1>
                    <p className='text-[24px] font-sans font-semibold'>Tools I know</p>
                </div>
                <div className='grid grid-cols-12 gap-[24px]'>
                    <div className="col-span-12 lg:col-span-3">
                        <div className='rounded-[10px] bg-[#131313] border border-[#000] shadow-tools py-[50px] px-[30px] '>
                            <p className='text-[#58A274] text-[24px]  font-semibold font-sans mb-[24px]  text-center'>Html</p>
                            <div className='w-[250px]  h-[248px] '>
                                <CircularProgressbar
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'butt',
                                        textSize: '24px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `#6EEE9E`,
                                        trailColor: `#262626`,
                                        textColor: 'white',

                                    })}
                                    value={`${80}`}
                                    text={`80%`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-3">
                        <div className='rounded-[10px] bg-[#131313] border border-[#000] shadow-tools py-[50px] px-[30px] '>
                            <p className='text-[#FC387E] text-[24px]  font-semibold font-sans mb-[24px]  text-center'>CSS</p>
                            <div className='w-[250px]  h-[248px] '>
                                <CircularProgressbar
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'butt',
                                        textSize: '24px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `#FC387E`,
                                        trailColor: `#262626`,
                                        textColor: 'white',

                                    })}
                                    value={`${75}`}
                                    text={`75%`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-3">
                        <div className='rounded-[10px] bg-[#131313] border border-[#000] shadow-tools py-[50px] px-[30px] '>
                            <p className='text-[#F2C94C] text-[24px]  font-semibold font-sans mb-[24px]  text-center'>Illustrator</p>
                            <div className='w-[250px]  h-[248px] '>
                                <CircularProgressbar
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'butt',
                                        textSize: '24px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `#F2C94C`,
                                        trailColor: `#262626`,
                                        textColor: 'white',

                                    })}
                                    value={`${85}`}
                                    text={`85%`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-3">
                        <div className='rounded-[10px] bg-[#131313] border border-[#000] shadow-tools py-[50px] px-[30px] '>
                            <p className='text-[#9747FF] text-[24px]  font-semibold font-sans mb-[24px]  text-center'>Photoshop</p>
                            <div className='w-[250px]  h-[248px] '>
                                <CircularProgressbar
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'butt',
                                        textSize: '24px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `#9747FF`,
                                        trailColor: `#262626`,
                                        textColor: 'white',

                                    })}
                                    value={`${90}`}
                                    text={`90%`}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Tools