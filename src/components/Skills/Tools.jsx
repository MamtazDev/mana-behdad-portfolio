import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ChangingProgressProvider from './ChangingProgressProvider'

const Tools = () => {

    AOS.init();

    return (
        <>
            <div className="max-w-screen-xl mx-auto mb-[120px]">
                <div className="text-white flex gap-[8px] items-center mb-[24px]">
                    <h1 className='text-[96px] font-semibold font-sans'>02</h1>
                    <p className='text-[24px] font-sans font-semibold'>Tools I know</p>
                </div>
                <div className='grid grid-cols-12 gap-[24px]'>
                    <div className="col-span-12 lg:col-span-3" data-aos="fade-top"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true">
                        <div className='rounded-[10px] bg-[#131313] border border-[#000] shadow-tools py-[50px] px-[30px] '>
                            <p className='text-[#58A274] text-[24px]  font-semibold font-sans mb-[24px]  text-center'>Html</p>
                            <div className='w-[250px] mx-auto  h-[248px] '>
                                <CircularProgressbar
                                    // styles={buildStyles({
                                    //     rotation: 0.25,
                                    //     strokeLinecap: 'butt',
                                    //     textSize: '24px',
                                    //     pathTransitionDuration : 0.5,
                                    //     pathColor: `#6EEE9E`,
                                    //     trailColor: `#262626`,
                                    //     textColor: 'white',

                                    // })}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'butt', 
                                        textSize: '24px',
                                        pathTransitionDuration: 1,
                                        pathColor: `#6EEE9E`,
                                        trailColor: `#262626`,
                                        textColor: 'white',
                                    })}
                                    value={`${80}`}
                                    text={`80%`}
                                />
                                {/* <Example label="Default animation speed">
                                    <ChangingProgressProvider values={[0, 20, 40, 60]}>
                                        {percentage => (
                                            <CircularProgressbar value={80} text={`80%`} />
                                        )}
                                    </ChangingProgressProvider >
                                </Example> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-3" data-aos="fade-bottom"
                        data-aos-offset="200"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true">
                        <div className='rounded-[10px] bg-[#131313] border border-[#000] shadow-tools py-[50px] px-[30px] '>
                            <p className='text-[#FC387E] text-[24px]  font-semibold font-sans mb-[24px]  text-center'>CSS</p>
                            <div className='w-[250px] mx-auto  h-[248px] '>
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
                    <div className="col-span-12 lg:col-span-3" data-aos="fade-top"
                        data-aos-offset="200"
                        data-aos-delay="1000"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true">
                        <div className='rounded-[10px] bg-[#131313] border border-[#000] shadow-tools py-[50px] px-[30px] '>
                            <p className='text-[#F2C94C] text-[24px]  font-semibold font-sans mb-[24px]  text-center'>Illustrator</p>
                            <div className='w-[250px] mx-auto  h-[248px] '>
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
                    <div className="col-span-12 lg:col-span-3" data-aos="fade-bottom"
                        data-aos-offset="200"
                        data-aos-delay="1500"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true">
                        <div className='rounded-[10px] bg-[#131313] border border-[#000] shadow-tools py-[50px] px-[30px] '>
                            <p className='text-[#9747FF] text-[24px]  font-semibold font-sans mb-[24px]  text-center'>Photoshop</p>
                            <div className='w-[250px] mx-auto  h-[248px] '>
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


function Example(props) {
    return (
        <div style={{ marginBottom: 80 }}>
            <hr style={{ border: "2px solid #ddd" }} />
            <div style={{ marginTop: 30, display: "flex" }}>
                <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
                <div style={{ width: "70%" }}>
                    <h3 className="h5">{props.label}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}
