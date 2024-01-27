import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {

    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const threshold = 100;
            setIsScrolled(scrollTop > threshold);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isAbsolute = location.pathname === '/' || location.pathname === '/skills' || location.pathname === '/work' || location.pathname === '/about' || location.pathname === '/firstCaseStudy' || location.pathname === '/secondCaseStudy';
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header>
            <div className={`w-full ${isAbsolute ? 'absolute' : ''} z-50 w-full`}>
                <nav className={`bg-${isScrolled || location.pathname === '/secondCaseStudy' || location.pathname === '/firstCaseStudy' ? 'black' : 'transparent'}  pb-[40px] lg:px-0 px-[24px] fixed top-0 lg:w-[100%] w-[100%]`}>
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-[42px]">
                        <Link to="/" className="flex items-center gap-[24px] ">
                            <img src={logo} className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-normal text-white font-outfit whitespace-nowrap">MANA BEHDAD</span>
                        </Link>
                        <button data-collapse-toggle="navbar-dropdown" type="button" class="text-white bg-transparent inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                            <ul class="flex flex-col lg:gap-[40px] gap-[20px] font-normal p-4 md:p- mt-4 lg:text-start text-center border border-gray-100 lg:bg-transparent bg-black rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                                <li>
                                    <Link to="/work" className={isActive('/work') ? 'text-[#8BEAAD] text-xl font-outfit hover:text-[#8BEAAD]' : ' text-xl font-outfit hover:text-[#8BEAAD] lg:text-white text-white '} aria-current="page">
                                        Work
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className={isActive('/#') ? 'text-[#8BEAAD] text-xl font-outfit hover:text-[#8BEAAD]' : ' text-xl font-outfit hover:text-[#8BEAAD] lg:text-white text-white '} aria-current="page">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/skills"
                                        className={isActive('/skills') ? 'text-[#8BEAAD] text-xl font-outfit hover:text-[#8BEAAD]' : ' text-xl font-outfit hover:text-[#8BEAAD] lg:text-white text-white '} aria-current="page">
                                        Skills
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={isActive('#') ? 'text-[#8BEAAD] text-xl font-outfit hover:text-[#8BEAAD]' : ' text-xl font-outfit hover:text-[#8BEAAD] lg:text-white text-white '} aria-current="page">
                                        Resume
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBar