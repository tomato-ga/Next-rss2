import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <header className="border-b flex items-center h-16 px-8 justify-between">
                <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link href='/' className="text-lg font-bold">
                            コメスト
                        </Link>
                        <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isMenuOpen}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0">
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-black bg-white rounded hover:bg-gray-100 md:p-0 dark:text-black">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-black bg-white rounded hover:bg-gray-100 md:p-0 dark:text-black">About</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-black bg-white rounded hover:bg-gray-100 md:p-0 dark:text-black">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-black bg-white rounded hover:bg-gray-100 md:p-0 dark:text-black">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-black bg-white rounded hover:bg-gray-100 md:p-0 dark:text-black">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
