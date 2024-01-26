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
        <>
            <nav className={`w-full ${isAbsolute ? 'absolute' : ''} bg-transparent border-gray-200 dark:bg-gray-900`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-[42px]">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-normal text-white font-outfit whitespace-nowrap ">MANA BEHDAD</span>
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex lg:flex-row flex-col justify-center items-center gap-[40px]">
                            <li>
                                <Link to="/work" className={isActive('/work') ? 'text-[#8BEAAD] text-xl font-outfit hover:text-[#8BEAAD]' : 'text-white text-xl font-outfit hover:text-[#8BEAAD]'} aria-current="page">
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className={isActive('/about') ? 'text-[#8BEAAD] text-xl font-outfit hover:text-[#8BEAAD]' : 'text-white text-xl font-outfit hover:text-[#8BEAAD]'} aria-current="page">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/skills"
                                    className={isActive('/skills') ? 'text-[#8BEAAD] text-xl font-outfit hover:text-[#8BEAAD]' : 'text-white text-xl font-outfit hover:text-[#8BEAAD]'} aria-current="page">
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={isActive('#') ? 'text-[#8BEAAD] text-xl font-outfit hover:text-[#8BEAAD]' : 'text-white text-xl font-outfit hover:text-[#8BEAAD]'} aria-current="page">
                                    Resume
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default NavBar