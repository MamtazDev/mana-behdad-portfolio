import Aos from 'aos'
import React from 'react'
import { ReactTyped } from 'react-typed'
import 'aos/dist/aos.css';
import aboutBanner from '../../assets/aboutbanner.png'

const AboutBanner = () => {

    Aos.init();

    return (
        <>
            <div className=" pt-[132px] mb-[105px] ">
                <div className="grid items-center grid-cols-12 ">
                    <div className="col-span-12 lg:col-span-7">
                        <div className='font-normal font-outfit  lg:text-start  text-center lg:text-[68px] text-[40px] text-white mb-[36px]  '
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true">
                            Hi I am <br className='lg:hidden visited:' />
                            <ReactTyped style={{ color: "#8BEAAD" }} strings={["Mana"]} typeSpeed={150}
                                backSpeed={150} loop />
                        </div>
                        <p className='lg:text-[30px] text-[20px] font-outfit font-normal leading-normal my-[20px] lg:text-start  text-center overflow-x-hidden' data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true">
                            Architect by training, UX/UI designer by passion – I <br /> bring a unique blend of precision and creativity to the tech realm. <br />
                        </p>
                        <p className='lg:text-[30px] text-[20px] font-outfit font-normal leading-normal lg:text-start  text-center overflow-x-hidden' data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true">

                            Mastering the art of  structures led me to the art of <br /> user experiences, where I craft pixel-perfect designs that seamlessly bridge aesthetics and functionality. Transforming blueprints into beautiful interfaces, I <br /> thrive on the intersection of form and function, <br /> creating spaces in the digital landscape that not only <br /> look incredible but also feel intuitively right.

                        </p>
                        <p className='lg:text-[30px] text-[20px] font-outfit font-normal leading-normal lg:text-start  text-center overflow-x-hidden mt-[20px]'> Let's build a user-friendly world, one design at a time!</p>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                        <img src={aboutBanner} alt="" />
                    </div>
                </div>


            </div>
        </>
    )
}

export default AboutBanner