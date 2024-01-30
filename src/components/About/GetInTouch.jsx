import Aos from 'aos';
import React from 'react'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const GetInTouch = () => {

    Aos.init();

    return (
        <>
            <div className='py-[40px] lg:px-[140px] bg-[#131313] rounded-[20px] text-center mb-[120px]'>
                <h1 className='lg:text-[54px] text-[40px] font-Oswald font-normal mb-[24px] ' data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true">Let’s Get In Touch</h1>
                <p data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true" className='lg:text-[24px] text-[20px] font-semibold font-sans mb-[53px] '>Excited to embark on a design journey together? Let's connect and transform your ideas into a stunning digital reality! Your vision, my design – let's make your project shine!</p>
                <Link to="mailto:mana.behdad@gmail.com">
                    <button data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="1000"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true" className='text-[24px] font-semibold font-sans lg:py-[20px] py-[10px] lg:px-[60px] px-[30px] hover:text-[#53906A] rounded-[12px] bg-[#53906A] border border-[#53906A] hover:bg-transparent '>Let’s Connect</button>
                </Link>
            </div>
        </>
    )
}

export default GetInTouch