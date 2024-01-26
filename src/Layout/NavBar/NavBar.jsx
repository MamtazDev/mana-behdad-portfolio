import React from 'react';
import logo from '../../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    const isAbsolute = location.pathname === '/' || location.pathname === '/skills' || location.pathname === '/work';

    const isActive = (path) => {
        return location.pathname === path;
    };
    
    return (
        <header>
            <div className={`w-full ${isAbsolute ? 'absolute' : ''} z-50 w-full `}>
                <nav class="bg-transparent lg:mx-0 mx-[24px] fixed top-0 lg:w-[100%] w-[93%] ">
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
                                    <Link to="/about" className={isActive('/about') ? 'text-[#8BEAAD] text-xl font-outfit hover:text-[#8BEAAD]' : ' text-xl font-outfit hover:text-[#8BEAAD] lg:text-white text-white '} aria-current="page">
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
        // <div className={`w-full ${isAbsolute ? 'absolute' : ''} `}>
        //     <nav className={`w-full bg-transparent`}>
        //         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-[42px]">
        //             <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        //                 <img src={logo} className="h-8" alt="Flowbite Logo" />
        //                 <span className="self-center text-2xl font-normal text-white font-outfit whitespace-nowrap ">MANA BEHDAD</span>
        //             </Link>
        //             <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        //                 <span className="sr-only">Open main menu</span>
        //                 <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        //                 </svg>
        //             </button>
        //             <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        //                 <ul className="flex lg:flex-row flex-col justify-center items-center gap-[40px]">
        //                     <li>
        //                         <Link to="/work" className={isActive('/work') ? 'text-[#8BEAAD] text-xl font-outfit hover:text-[#8BEAAD]' : 'text-white text-xl font-outfit hover:text-[#8BEAAD]'} aria-current="page">
        //                             Work
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link to="/about" className={isActive('/about') ? 'text-[#8BEAAD] text-xl font-outfit hover:text-[#8BEAAD]' : 'text-white text-xl font-outfit hover:text-[#8BEAAD]'} aria-current="page">
        //                             About
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link to="/skills"
        //                             className={isActive('/skills') ? 'text-[#8BEAAD] text-xl font-outfit hover:text-[#8BEAAD]' : 'text-white text-xl font-outfit hover:text-[#8BEAAD]'} aria-current="page">
        //                             Skills
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link to="#" className={isActive('#') ? 'text-[#8BEAAD] text-xl font-outfit hover:text-[#8BEAAD]' : 'text-white text-xl font-outfit hover:text-[#8BEAAD]'} aria-current="page">
        //                             Resume
        //                         </Link>
        //                     </li>

        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>


        // </div> 
    )
}

export default NavBar