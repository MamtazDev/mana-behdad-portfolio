import React from "react";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";

import "aos/dist/aos.css";
import Aos from "aos";

const Photography = () => {
  // Aos.init();

  return (
    <div className="mb-[81px] overflow-hidden">
      <h2 className="text-[36px] font-Oswald  font-normal text-[#8BEAAD] mb-[19px] lg:text-start text-center ">
        Photography
      </h2>
      <p className="text-[24px] font-normal font-sans mb-[35px]  lg:text-start text-center ">
        Step into the human tapestry captured through my lens. In the
        photography section, faces become stories, and moments turn into
        emotions frozen in time.
      </p>

      <div className="grid grid-cols-12 gap-[45px]">
        <div className="w-full col-span-12 overflow-hidden lg:col-span-4">
          <img className="w-full" src={p1} alt="photography" />
        </div>
        <div className="w-full col-span-12 overflow-hidden lg:col-span-4">
          <img className="w-full" src={p2} alt="photography" />
        </div>
        <div className="w-full col-span-12 overflow-hidden lg:col-span-4">
          <img className="w-full" src={p3} alt="photography" />
        </div>
        <div className="w-full col-span-12 overflow-hidden lg:col-span-4">
          <img className="w-full" src={p4} alt="photography" />
        </div>
        <div className="w-full col-span-12 overflow-hidden lg:col-span-4">
          <img className="w-full" src={p5} alt="photography" />
        </div>
        <div className="w-full col-span-12 overflow-hidden lg:col-span-4">
          <img className="w-full" src={p6} alt="photography" />
        </div>
      </div>
    </div>
    // <div className='mb-[81px] overflow-hidden'>
    //     <h2 className='text-[36px] font-Oswald  font-normal text-[#8BEAAD] mb-[19px] lg:text-start text-center ' data-aos="fade-up"
    //         data-aos-offset="200"
    //         data-aos-delay="100"
    //         data-aos-duration="1000"
    //         data-aos-easing="ease-in-out"
    //         data-aos-mirror="true">Photography</h2>
    //     <p className='text-[24px] font-normal font-sans mb-[35px]  lg:text-start text-center ' data-aos="fade-up"
    //         data-aos-offset="200"
    //         data-aos-delay="500"
    //         data-aos-duration="1000"
    //         data-aos-easing="ease-in-out"
    //         data-aos-mirror="true">Step into the human tapestry captured through my lens. In the photography section, faces become stories, and moments turn into emotions frozen in time.</p>

    //     <div className='grid grid-cols-12 gap-[45px]'>
    //         <div data-aos="fade-right"
    //             data-aos-offset="200"
    //             data-aos-delay="50"
    //             data-aos-duration="1000"
    //             data-aos-easing="ease-in-out"
    //             data-aos-mirror="true" className="w-full col-span-12 overflow-hidden lg:col-span-4 img-hover-zoom"  >
    //             <img className='w-full' src={p1} alt="photography" />
    //         </div>
    //         <div data-aos="fade-up"
    //             data-aos-offset="200"
    //             data-aos-delay="50"
    //             data-aos-duration="1000"
    //             data-aos-easing="ease-in-out"
    //             data-aos-mirror="true" className="w-full col-span-12 overflow-hidden lg:col-span-4 img-hover-zoom"  >
    //             <img className='w-full' src={p2} alt="photography" />
    //         </div>
    //         <div data-aos="fade-left"
    //             data-aos-offset="200"
    //             data-aos-delay="50"
    //             data-aos-duration="1000"
    //             data-aos-easing="ease-in-out"
    //             data-aos-mirror="true" className="w-full col-span-12 overflow-hidden lg:col-span-4 img-hover-zoom"  >
    //             <img className='w-full'
    //                 src={p3} alt="photography" />
    //         </div>
    //         <div data-aos="fade-right"
    //             data-aos-offset="200"
    //             data-aos-delay="50"
    //             data-aos-duration="1000"
    //             data-aos-easing="ease-in-out"
    //             data-aos-mirror="true" className="w-full col-span-12 overflow-hidden lg:col-span-4 img-hover-zoom"  >
    //             <img className='w-full' src={p4} alt="photography" />
    //         </div>
    //         <div data-aos="fade-up"
    //             data-aos-offset="200"
    //             data-aos-delay="50"
    //             data-aos-duration="1000"
    //             data-aos-easing="ease-in-out"
    //             data-aos-mirror="true" className="w-full col-span-12 overflow-hidden lg:col-span-4 img-hover-zoom"  >
    //             <img className='w-full' src={p5} alt="photography" />
    //         </div>
    //         <div data-aos="fade-left"
    //             data-aos-offset="200"
    //             data-aos-delay="50"
    //             data-aos-duration="1000"
    //             data-aos-easing="ease-in-out"
    //             data-aos-mirror="true" className="w-full col-span-12 overflow-hidden lg:col-span-4 img-hover-zoom"  >
    //             <img className='w-full' src={p6} alt="photography" />
    //         </div>
    //     </div>
    // </div>
  );
};

export default Photography;
