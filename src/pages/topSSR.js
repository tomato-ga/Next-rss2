// /Volumes/SSD_1TB/next-antena2/front/src/pages/topSSR.js

import { useState, useEffect, useMemo } from 'react';
import React from 'react';
import Link from 'next/link';
import { NextSeo, ArticleJsonLd } from 'next-seo';


import Sidebar from '@/components/Sidebar';
import Tags from '@/components/Tags';
import Pagination from '@/components/Pagination';
import { handleClickCount } from '@/lib/clickCountDB';
import FetchClickCounts from '@/components/Clickcount';
import Favthumbnail from '@/components/Favthumbnail';

export default function Ssr({ data, totalCount, page, limit }) {

    const itemIds = useMemo(() => data ? data.map(item => item.id) : [], [data]);
    const [items, setItems] = useState(itemIds);
    const [clickCounts, setClickCounts] = useState({});

    if (!data) return null; // Ssrコンポーネントの先頭部分でこのように追加してください。

    return (
        <>
    
        <div className='container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start'>
            <Sidebar />
            <div className="md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-3 p-1 order-2 md:order-2">
                {data.map((item, index) => {
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
                    if (item.tag) { // Check if tag exists
                        tagsArray = item.tag.split(',').map(tag => tag.trim());
                    }
                return (
                    <div key={index} className='border-gray-300 rounded-lg shadow-lg'>
                        <div className='border-gray-200'>
                            <div onClick={() => { handleClickCount(item.id) }}>
                                <div className="h-[270px] w-full md:h-[320px] md:w-full">
                                    <Link href="/item/[items]" as={`/item/${item.id}`} className=''>
                                        <img src={item.imgurl} className="w-full h-full object-cover" alt={item.title} />
                                    </Link>
                                </div>

                                <div className='relative flex items-center mt-2'>
                                    <div className='flex flex-col items-center'>
                                        <span className="text-red-600 text-xl font-bold tracking-widest text-center p-2">
                                            <FetchClickCounts itemId={item.id} />
                                        </span>

                                        <span className="text-red-600 text-xl font-bold tracking-widest text-center p-2">
                                            <Favthumbnail postId={item.id} articleData={item}/>
                                        </span>
                                    </div>

                                    <div className='ml-4'>
                                        <Link href="/item/[items]" as={`/item/${item.id}`} className=''>
                                            <h2 className='text-sm md:text-xl font-bold text-blue-600 z-20'>
                                                {item.title}
                                            </h2>
                                        </Link>
                                        <div className='tags'>
                                            <Tags tagsArray={tagsArray} numberTags={5} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            })}
            <Pagination totalCount={totalCount} pageSize={limit} currentPage={page} pageChangeUrl={(page) => `/page/${page}`} />
        </div>
    </div>
    </>
);
    
    
}

    
    // useEffect(() => {
    //     const fetchClickCounts = async () => {
    //         const response = await fetch('https://ape.erorice.com/click_counts', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(itemIds), 
    //         });
    
    //         if (!response.ok) {
    //             console.error(`Error fetching click counts: ${response.status} ${response.statusText}`);
    //             return;
    //         }
    
    //         const initialClickCounts = await response.json();
    //         setClickCounts(initialClickCounts);
    //     };
    
    //     if (Array.isArray(itemIds) && itemIds.every(Number.isInteger)) {
    //         fetchClickCounts();
    //     } else {
    //         console.error("itemIds must be an array of integers", itemIds);
    //     }
    // }, [itemIds]);
    

    // console.log('ID一覧',itemIds);
    // console.log('クリックカウント数',clickCounts);
    // console.log('clickCountsの型:', typeof clickCounts);

    // return (

    //     <div className='container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start'>
    //         <Sidebar />
    //         <div className="md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-3 p-1 order-2 md:order-2">
    //             {data.map((item, index) => {
    //                 let date = item.published_at ? new Date(item.published_at) : null;
    //                 let formattedDate = "";
    
    //                 if (date && !isNaN(date.getTime())) { // Check if date is valid
    //                     formattedDate = new Intl.DateTimeFormat('ja-JP', {
    //                         year: 'numeric', month: '2-digit', day: '2-digit',
    //                         hour: '2-digit', minute: '2-digit', second: '2-digit'
    //                     }).format(date);
    //                 } else {
    //                     console.error("Invalid date: ", item.published_at);
    //                 }
    //                 let tagsArray = [];
    //                 if (item.tag) { // Check if tag exists
    //                     tagsArray = item.tag.split(',').map(tag => tag.trim());
    //                 }
    //                 return (
    //                     <div key={index} className='border-gray-300 rounded-lg shadow-lg'>
    //                         <div className=' border-gray-200 '>
    //                             <div onClick={() => {handleClickCount(item.id)}}>
    //                             <Link href="/item/[items]" as={`/${item.site_id}/${item.id}`}>
    //                             <div className="relative h-[270px] w-full md:h-[320px] md:w-full">
    //                                 <Image fill src={item.imgurl} className={styles.image} alt={item.title} priority />
    //                                 {/* <img src={item.imgurl} className={styles.image} alt={item.title} /> */}


    //                                 <span className="absolute rounded-md top-2 left-2 bg-white bg-opacity-90 text-red-600 text-xl font-bold tracking-widest text-center p-1">
    //                                     <FetchClickCounts itemId={item.id}/>
    //                                 </span>
                                    
    //                             </div>
                                    
    //                                 <h2 className='m-2 text-sm md:text-xl font-bold text-blue-600'>
    //                                     {item.title}
    //                                 </h2>
    //                             </Link>
    //                             </div>
    //                             <div className='tags'>
    //                             <Tags tagsArray={tagsArray} numberTags={5}/>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 );
    //             })}
    //             <Pagination totalCount={totalCount} pageSize={limit} currentPage={page} pageChangeUrl={(page) => `/page/${page}`} />
    //         </div>
    //     </div>
    // );