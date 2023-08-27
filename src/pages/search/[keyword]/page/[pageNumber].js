// /Volumes/SSD_1TB/next-antena2/front/src/pages/tag/[tagpage]/page/[pageNumber].js

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Tags from '@/components/Tags';
import Pagination from '@/components/Pagination';
import useTotalCount from '@/hooks/useTotalCount';
import Link from 'next/link';
import styles from '@/components/iiim.module.css'
import Image from 'next/image';
import useSearchPagination from '@/hooks/useSearchPagination';
import { useRouter } from 'next/router';
import { handleClickCount } from '@/lib/clickCountDB';
import FetchClickCounts from '@/components/Clickcount';

import SearchBar from '@/components/SearchBar';
import PopularMovies from '@/components/PopularMovies';
import PopularTags from '@/components/PopularTags';
import Footer from '@/components/Footer';


const SearchPage = ({ posts, totalCount, keyword, pageNumber, pageSize }) => {
    const router = useRouter();

    const totalPages = Math.ceil(totalCount.count / pageSize);

    const changePage = (newPage) => {
    router.push(`/search/${keyword}/page/${newPage}`);
    };


    return (
        <>
        <Header />
        <SearchBar />

        <div className="justify-center text-center font-bold">
            <h2 className="mb-4">
                <span className="border-b-2 pb-1 border-blue-300 text-2xl">
                {keyword}の関連動画
                </span>
            </h2>
        </div>

        <div className='container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start'>
            <Sidebar />
            <div className="md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-3 p-1 order-2 md:order-2">
                {posts.map((item, index) => {
                    let date = item.published_at ? new Date(item.published_at) : null;
                    let formattedDate = "";
    
                    if (date && !isNaN(date.getTime())) { // Check if date is valid
                        formattedDate = new Intl.DateTimeFormat('ja-JP', {
                            year: 'numeric', month: '2-digit', day: '2-digit',
                            hour: '2-digit', minute: '2-digit', second: '2-digit'
                        }).format(date);
                    } else {
                        console.error("Invalid date: ", item.published_at);
                    }
                    let tagsArray = [];
                    if (item.tag) {
                        tagsArray = item.tag.split(',').map(tag => tag.trim());
                    }
                    return (
                        <div key={index} className='border-gray-300 rounded shadow-md'>
                            <div onClick={() => { handleClickCount(item.id) }}>

                            <div className='border-gray-200'>
                                <Link href="/item/[items]" as={`/item/${item.id}`}>
                                        <div className="relative h-[270px] w-full md:h-[320px] md:w-full">
                                            <img src={item.imgurl} className="w-full h-full object-cover" alt={item.title} />
                    
                                            <span className="absolute rounded-md top-2 left-2 bg-white bg-opacity-90 text-red-600 text-xl font-bold tracking-widest text-center p-1">
                                                <FetchClickCounts itemId={item.id} />
                                            </span>
                                        </div>
                                    {/* <div className="relative h-[170px] w-full md:h-[320px] md:w-full">
                                        <Image fill src={item.imgurl} className="object-cover" alt={item.title} sizes="(max-width: 600px) 50vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw"/>
                                        <FetchClickCounts itemId={item.id}/>

                                    </div> */}
                                    <h2 className='m-2 text-sm md:text-xl font-bold text-blue-600'>
                                        {item.title}
                                    </h2>
                                </Link>
                                <div className='tags'>
                                <Tags tagsArray={tagsArray} numberTags={5}/>
                                </div>
                            </div>
                        </div>
                        </div>
                    );
                })}
                <Pagination 
                totalCount={totalCount} 
                pageSize={pageSize} 
                currentPage={pageNumber} 
                changePage={changePage}
                pageChangeUrl={(page) => {
                    return `/search/${keyword}/page/${page}`;
                }}
                />
            </div>
        </div>
    <Footer />
        </>
    );
}


export async function getServerSideProps({ params }) {
    const pageSize = 20;
    const keyword = params.keyword;
    const pageNumber = params.pageNumber || 1;
    const encodedKeyword = encodeURIComponent(keyword);


    // SSRのためにデータフェッチを直接行う
    const fetchUrl = `https://api.erorice.com/search?q=${encodedKeyword}&page=${pageNumber}&limit=${pageSize}`;
    const res = await fetch(fetchUrl);

    if (!res.ok) {
        console.error('Error fetching posts:', res.statusText);
        throw new Error('Failed to fetch posts');
    }

    const posts = await res.json();

    const totalRes = await fetch(`https://api.erorice.com/search_count?tag=${keyword}`);

    if (!totalRes.ok) {
        console.error('Error fetching total count:', totalRes.statusText);
        throw new Error('Failed to fetch total count');
    }

    const totalCount = await totalRes.json();

    return {
    props: {
        posts,
        totalCount,
        keyword,
        pageNumber: parseInt(pageNumber),
        pageSize,
    }
    };
}


export default SearchPage;
