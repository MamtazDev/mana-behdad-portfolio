import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 100;
      setIsScrolled(scrollTop > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const isAbsolute =
    location.pathname === "/" ||
    location.pathname === "/skills" ||
    location.pathname === "/work" ||
    location.pathname === "/about" ||
    location.pathname === "/firstCaseStudy" ||
    location.pathname === "/secondCaseStudy";

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header>
      <div className={`w-full ${isAbsolute ? "absolute" : ""} z-50 w-full`}>
        <nav
          className={`bg-${
            isScrolled ||
            location.pathname === "/secondCaseStudy" ||
            location.pathname === "/firstCaseStudy"
              ? "black"
              : "transparent"
          }  pb-[40px] lg:px-0 px-[24px] fixed top-0 lg:w-[100%] w-[100%]`}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-[42px]">
            <Link to="/" className="flex items-center gap-[24px]">
              <img src={logo} className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-normal text-white font-outfit whitespace-nowrap">
                MANA BEHDAD
              </span>
            </Link>
            <button
              onClick={toggleDropdown}
              className="text-white bg-transparent inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded={isDropdownOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`flex justify-end w-full md:block md:w-auto ${
                isDropdownOpen ? "block" : "hidden"
              }`}
              id="navbar-dropdown"
            >
              <ul className="flex w-40  md:w-auto flex-col lg:gap-[40px] gap-[20px] font-normal p-4 md:p- mt-4 lg:text-start text-center lg:bg-transparent bg-black rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                <li>
                  <Link
                    to="/work"
                    className={
                      isActive("/work")
                        ? "text-[#8BEAAD] text-xl font-outfit hover:text-[#8BEAAD]"
                        : " text-xl font-outfit hover:text-[#8BEAAD] lg:text-white text-white "
                    }
                    onClick={() => {
                      closeDropdown();
                    }}
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={
                      isActive("/about")
                        ? "text-[#8BEAAD] text-xl font-outfit hover:text-[#8BEAAD]"
                        : " text-xl font-outfit hover:text-[#8BEAAD] lg:text-white text-white "
                    }
                    onClick={() => {
                      closeDropdown();
                    }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skills"
                    className={
                      isActive("/skills")
                        ? "text-[#8BEAAD] text-xl font-outfit hover:text-[#8BEAAD]"
                        : " text-xl font-outfit hover:text-[#8BEAAD] lg:text-white text-white "
                    }
                    onClick={() => {
                      closeDropdown();
                    }}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1VsqKRVSTcuCiryr9BHbGlpJDBKFNWO08/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-outfit hover:text-[#8BEAAD] lg:text-white text-white"
                    onClick={() => {
                      closeDropdown();
                    }}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
