import Link from 'next/link';
import React, { useState } from 'react'


const SearchBar = () => {

    const [searchWord, setSearchWord] = useState('');
    const handleSearchInput = (e) => {
        setSearchWord(e.target.value);
    };

    const resetInputField = () => {
        setSearchWord('');
    };

    const callSearchFunction = (e) => {
        e.preventDefault();
        resetInputField();
    }

    return (
    <form className='search'>
        <input value={searchWord}
        onChange={handleSearchInput}
        type='text' />
        <Link key={searchWord} href="/search/[keyword]/page/[pageNumber]" as={`/search/${searchWord}/page/1`}>
        <input onClick={callSearchFunction}
        type='submit'
        value='検索' />
        </Link>
    </form>
    );
}

export default SearchBar;