// /Volumes/SSD_1TB/next-antena2/front/src/pages/tag/[tagpage]/page/[pageNumber].js

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Tags from '@/components/Tags';

import Link from 'next/link';
import Image from 'next/image';

import FetchClickCounts from '@/components/Clickcount';
import { handleClickCount } from '@/lib/clickCountDB';
import SearchBar from '@/components/SearchBar';
import Footer from '@/components/Footer';


const MostPopular = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ENDP = `https://ape.erorice.com/top_movies_page`;
                const res = await fetch(ENDP);
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [])

console.log(data);

    return (
        <>
            <Header />
            <SearchBar />
    
            <div className="justify-center text-center font-bold">
            <h2 className="mb-4">
                <span className="border-b-2 pb-1 border-blue-300 text-2xl">
                    人気動画
                </span>
            </h2>
            </div>
    
            <div className='container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start'>
            <Sidebar />
            <div className="md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-3 p-1 order-2 md:order-2">
                
                {data.map((item, index) => {
                    let date = item.rss.published_at ? new Date(item.rss.published_at) : null;
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
                    if (item.rss.tag) { // Check if tag exists
                        tagsArray = item.rss.tag.split(',').map(tag => tag.trim());
                    }
                    return (
                        <div key={`${index}`} className='border-gray-300 rounded shadow-md'>
                            <div onClick={() => { handleClickCount(item.rss.id) }}>
                                <div className='border-gray-200'>
                                    <Link href="/item/[items]" as={`/item/${item.rss.id}`}>
                                        <div className="relative h-[170px] w-full md:h-[320px] md:w-full">
                                            <Image fill src={item.rss.imgurl} className="object-cover" alt={item.rss.title} sizes="(max-width: 600px) 50vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw"/>
                                            <FetchClickCounts itemId={item.rss.id}/>
                                        </div>
                                        <h2 className='m-2 text-sm md:text-xl font-bold text-blue-600'>
                                            {item.rss.title}
                                        </h2>
                                    </Link>
                                    <div className='tags'>
                                        <Tags tagsArray={tagsArray} numberTags={5}/>
                                    </div>
                                    {/* <div className='date px-2 align-sub text-gray-500'>
                                        {date && <p>{formattedDate}</p>}
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    );
                })}
                {/* <Pagination totalCount={totalCount} pageSize={limit} currentPage={page} pageChangeUrl={(page) => `/page/${page}`} /> */}
            </div>
        </div>
    <Footer />
    </>
    )
}

export default MostPopular;
