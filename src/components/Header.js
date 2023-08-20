import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header className="border-b flex items-center h-16 pl-1 justify-between bg-white text-black relative">
            <nav className="border-gray-200 w-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                    <Link href='/'>
                        <span className="text-lg font-bold text-black cursor-pointer">エロコメβ</span>
                    </Link>

                    {/* ハンバーガーメニューボタン: 小さいデバイスでのみ表示 */}
                    <div className="relative inline-block text-left lg:hidden mr-1">
                        <button ref={buttonRef} onClick={toggleDropdown} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-blue-700 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <div ref={dropdownRef} id="dropdown" className={`z-50 origin-top-right absolute right-0 mt-2 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-blue-600`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li><Link href="/Mostpopular" className="block px-4 py-2 hover:text-red-300">人気動画</Link></li>
                                <li><Link href="/favpage" className="block px-4 py-2 hover:text-red-300">お気に入り</Link></li>
                                <li><Link href="/rireki" className="block px-4 py-2 hover:text-red-300">閲覧履歴</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* 中央・大きいデバイスでのみ表示するリンク */}
                    <div className="hidden lg:flex space-x-4">
                        <Link href="/Mostpopular" className="text-gray-700 hover:text-red-300">人気動画</Link>
                        <Link href="/favpage" className="text-gray-700 hover:text-red-300">お気に入り</Link>
                        <Link href="/rireki" className="text-gray-700 hover:text-red-300">閲覧履歴</Link>
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