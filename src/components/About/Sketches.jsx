import React from "react";
import sk1 from "../../assets/sk1.png";
import sk2 from "../../assets/sk2.png";
import sk3 from "../../assets/sk3.png";
import sk4 from "../../assets/sk4.png";
import sk5 from "../../assets/sk5.png";
import sk6 from "../../assets/sk6.png";

import "aos/dist/aos.css";
import Aos from "aos";

const Sketches = () => {
  // Aos.init();

  return (
    <>
      <div className="mb-[120px] overflow-hidden">
        <h2 className="text-[36px] font-Oswald  font-normal text-[#8BEAAD] mb-[19px]  lg:text-start text-center  ">
          Architectural Sketches
        </h2>
        <p className="text-[24px] font-normal font-sans mb-[35px] lg:text-start text-center  ">
          From the initial spark of inspiration to the final flourish, these
          sketches are windows into the architectural <br /> dreams I bring to
          life.
        </p>
        <div className="grid grid-cols-12 gap-[45px]">
          <div className="w-full col-span-12 lg:col-span-4">
            <img className="w-full" src={sk1} alt="sketches" />
          </div>
          <div className="w-full col-span-12 lg:col-span-4">
            <img className="w-full" src={sk2} alt="sketches" />
          </div>
          <div className="w-full col-span-12 lg:col-span-4">
            <img className="w-full" src={sk3} alt="sketches" />
          </div>
          <div className="w-full col-span-12 lg:col-span-4">
            <img className="w-full" src={sk4} alt="sketches" />
          </div>
          <div className="w-full col-span-12 lg:col-span-4">
            <img className="w-full" src={sk5} alt="sketches" />
          </div>
          <div className="w-full col-span-12 lg:col-span-4">
            <img className="w-full" src={sk6} alt="sketches" />
          </div>
        </div>
      </div>
      {/* <div className='mb-[120px] overflow-hidden'>
                <h2 className='text-[36px] font-Oswald  font-normal text-[#8BEAAD] mb-[19px]  lg:text-start text-center  ' data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true">Architectural Sketches</h2>
                <p className='text-[24px] font-normal font-sans mb-[35px] lg:text-start text-center  ' data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true">From the initial spark of inspiration to the final flourish, these sketches are windows into the  architectural <br /> dreams I bring to life.</p>
                <div className='grid grid-cols-12 gap-[45px]'>
                    <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true" className="w-full col-span-12 lg:col-span-4 img-hover-zoom">
                        <img className='w-full' src={sk1} alt="sketches" />
                    </div>
                    <div data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true" className="w-full col-span-12 lg:col-span-4 img-hover-zoom">
                        <img className='w-full' src={sk2} alt="sketches" />
                    </div>
                    <div data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true" className="w-full col-span-12 lg:col-span-4 img-hover-zoom">
                        <img className='w-full' src={sk3} alt="sketches" />
                    </div>
                    <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true" className="w-full col-span-12 lg:col-span-4 img-hover-zoom">
                        <img className='w-full' src={sk4} alt="sketches" />
                    </div>
                    <div data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true" className="w-full col-span-12 lg:col-span-4 img-hover-zoom">
                        <img className='w-full' src={sk5} alt="sketches" />
                    </div>
                    <div data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true" className="w-full col-span-12 lg:col-span-4 img-hover-zoom">
                        <img className='w-full' src={sk6} alt="sketches" />
                    </div>

                </div>
            </div> */}
    </>
  );
};

export default Sketches;
