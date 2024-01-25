import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const SkillBanner = () => {

    AOS.init();

    return (
        <div className="skill_banner_bg text-white mb-[130px] ">
            <div className='max-w-screen-xl mx-auto pt-[189px]'>
                <h1 className='font-normal font-outfit text-[68px] text-white mb-[36px] ' data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true">
                    Empowered by a
                    a <span className='text-[#8BEAAD]'>diverse  <br /> skill set</span>
                    , I navigate the  <br /> landscape of UI/UX design  <br /> with finesse
                </h1>
                <p data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true" className='text-[32px] font-outfit font-normal leading-normal '>From wireframing to prototyping, my proficiency in <br /> design tools complements my strategic approach to <br /> user experiences. My passion for pixel perfection and <br /> attention to detail ensure that every design element <br /> serves both form and function. Let's explore the <br /> dynamic world of UI/UX together, where innovation <br /> meets usability.</p>
            </div>
        </div>
    )
}

export default SkillBanner