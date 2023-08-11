import Link from 'next/link';
import { useRouter } from 'next/router'; // 追加
import React, { useState } from 'react'

const SearchBar = () => {
    const router = useRouter(); // 追加
    const [searchWord, setSearchWord] = useState('');
    
    const handleSearchInput = (e) => {
        setSearchWord(e.target.value);
    };

    const handleSubmit = (e) => { // 変更
        e.preventDefault();
        if (searchWord) {
            const href = `/search/${searchWord}/page/1`;
            router.push(href); // 遷移
        }
        setSearchWord(''); // リセット
    };

    return (
        <div className='p-5'>
        <form 
            onSubmit={handleSubmit} // 変更
            className='flex border border-gray-300 rounded-md shadow-sm w-full max-w-md mx-auto my-4 '
        >
            <input
                value={searchWord}
                onChange={handleSearchInput}
                type='text'
                className='flex-grow p-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
                placeholder='おっぱい...'
            />
            <button
                type='submit'
                className='bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
            >
                検索
            </button>
        </form>
        </div>
    );
}

export default SearchBar;
