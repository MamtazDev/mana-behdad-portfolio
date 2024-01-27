import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const SkillBanner = () => {

    AOS.init();

    return (

        <div className="skill_banner_bg text-white lg:mb-[130px] mb-[80px] lg:mx-0 mx-[24px] overflow-hidden ">
            <div className='max-w-screen-xl mx-auto pt-[189px]'>
                <h1 className='font-normal font-outfit lg:text-[68px] text-[40px] text-white mb-[36px] lg:text-start text-center ' data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true">
                    Empowered by 
                    a <span className='text-[#8BEAAD]'>diverse  <br className='hidden lg:flex' /> skill set</span>
                    ,<br className='flex lg:hidden' /> I navigate the  <br /> landscape of UI/UX design <br className='hidden lg:flex' /> with finesse
                </h1>
                <p data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true" className='lg:text-[32px] text-[24px] font-outfit font-normal leading-normal lg:text-start text-center '>From wireframing to prototyping, my proficiency in
                    <br className='hidden lg:flex' /> design tools complements my strategic approach to <br className='hidden lg:flex' /> user experiences. My passion for pixel perfection and <br className='hidden lg:flex' /> attention to detail ensure that every design element <br className='hidden lg:flex' /> serves both form and function. Let's explore the <br className='hidden lg:flex' /> dynamic world of UI/UX together, where innovation <br className='hidden lg:flex' /> meets usability.</p>
            </div>
        </div>
    )
}

export default SkillBanner