import React, { useState } from "react";
import Link from "next/link";


const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <header className="border-b flex items-center h-16 px-8 justify-between bg-white text-black relative"> {/* relative class added here */}
            <nav className="border-gray-200 w-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href='/' className="text-lg font-bold text-black">
                        コメスト
                    </Link>

                    <div className="relative inline-block text-left"> {/* This div is added to contain the button and dropdown */}
                        <button onClick={toggleDropdown} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">メニュー
                            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <div id="dropdown" className={`z-50 origin-top-right absolute right-0 mt-2 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700`}> {/* adjusted positioning */}
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a></li>
                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a></li>
                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a></li>
                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;




// 前のやつ
{/* <header className="border-b flex items-center h-16 px-8 justify-between bg-white text-black">
<nav className="border-gray-200 w-full">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href='/' className="text-lg font-bold text-black">
            コメスト
        </Link>
        <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-black dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white text-black md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-black bg-white rounded hover:bg-gray-100 md:p-0">Home</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-black bg-white rounded hover:bg-gray-100 md:p-0">About</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-black bg-white rounded hover:bg-gray-100 md:p-0">Services</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-black bg-white rounded hover:bg-gray-100 md:p-0">Pricing</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-black bg-white rounded hover:bg-gray-100 md:p-0">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</header> */}