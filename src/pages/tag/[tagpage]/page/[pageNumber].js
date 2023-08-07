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
import useTagPagination from '@/hooks/useTagPagination';
import { useRouter } from 'next/router';


const TagPage = () => {
    const router = useRouter();
    const { tagpage, pageNumber } = router.query; // Grab pageNumber from router.query
    const pageSize = 20; 

    const [posts, currentPage, changePage] = useTagPagination(`http://192.168.0.25:7002`, tagpage, pageSize);
    const totalCount = useTotalCount(`http://192.168.0.25:7002/tag_count?tag=${tagpage}`);

    useEffect(() => {
        changePage(parseInt(pageNumber));
    }, [tagpage, pageNumber]);


    return (
        <>
        <Header />
        <div className='container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start'>
            <Sidebar />
            <div className="md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-3 p-1 order-2 md:order-2">
            {/* <SearchForm /> */}
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
                    if (item.tag) { // Check if tag exists
                        tagsArray = item.tag.split(',').map(tag => tag.trim());
                    }
                    return (
                        <div key={index} className='border-gray-300 rounded shadow-md'>
                            <div className='border-gray-200'>
                                <Link href="/[siteId]/[itemId]" as={`/${item.site_id}/${item.id}`}>
                                    <div className="relative h-[170px] w-full md:h-[320px] md:w-full">
                                        <Image fill src={item.imgurl} className="object-cover" alt={item.title} sizes="(max-width: 600px) 50vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw"/>
                                    </div>
                                    <h2 className='m-2 text-sm md:text-xl font-bold text-blue-600'>
                                        {item.title}
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
                    );
                })}
                <Pagination 
                totalCount={totalCount} 
                pageSize={pageSize} 
                currentPage={currentPage} 
                changePage={changePage}
                pageChangeUrl={(page) => {
                    return `/tag/${tagpage}/page/${page}`;
                }}
                />
    
            </div>
        </div>
        </>
    );
}

export default TagPage;
