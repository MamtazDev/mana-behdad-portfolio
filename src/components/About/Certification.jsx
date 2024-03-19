import React from "react";
import certificate from "../../assets/cirtificate.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Certification = () => {
  AOS.init();

  return (
    <>
      <div className="grid items-center grid-cols-12 lg:mb-[176px] mb-[80px] ">
        <div className="col-span-12 lg:col-span-6">
          <h1 className="  text-[36px] font-Oswald text-[#8BEAAD] font-medium mb-[20px] lg:text-start text-center ">
            Certification
          </h1>
          <p className="text-[#F1F1F1] font-sans  font-semibold  leading-[33px] lg:text-start text-center text-[24px] ">
            Certified to craft exceptional user experiences, my UI/UX{" "}
            certification is a testament to my commitment to excellence in
            design. Equipped with the latest industry knowledge and best
            practices, I bring a strategic and user-centric approach to every
            project. This certification not only validates my skills but also
            reflects my dedication to staying at the forefront of the dynamic
            UI/UX landscape.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6 ms-auto lg:mt-0 mt-[30px] ">
          <img src={certificate} alt="" />
        </div>
      </div>
    </>
  );
};

export default Certification;
