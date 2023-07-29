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



const SearchPage = () => {
    const router = useRouter();
    const { keyword, pageNumber } = router.query; // Grab pageNumber from router.query
    const pageSize = 20; 

    const [posts, currentPage, changePage] = useSearchPagination(`http://192.168.0.25:7002`, keyword, pageSize);
    const totalCount = useTotalCount(`http://192.168.0.25:7002/search_count?tag=${keyword}`);

    useEffect(() => {
        changePage(parseInt(pageNumber));
    }, [keyword, pageNumber]);


    return (
        <>
        <Header />
        <div className='container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start'>
            <Sidebar />
            <div className="md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-5 p-5 order-2 md:order-2">
            <h2>{keyword}の関連動画</h2>
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
                        <div key={index} className='my-1 px-4 border-gray-300 rounded-lg shadow-lg'>
                            <div className='border-b border-gray-200 m-3'>
                                <div onClick={() => {handleClickCount(item.id)}}>
                                <Link href="/[siteId]/[itemId]" as={`/${item.site_id}/${item.id}`}>
                                    <div className="p-4 relative">
                                        <Image fill src={item.imgurl} className={styles.image} alt={item.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                                    </div>
                                    <h2 className='m-3 text-xl'>
                                        {item.title}
                                    </h2>
                                </Link>
                                </div>
                                <div className='tags'>
                                <Tags tagsArray={tagsArray}/>
                                </div>
                                <div className='date px-2 align-sub text-gray-500'>
                                    {date && <p>{formattedDate}</p>}
                                </div>
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
                    return `/tag/${keyword}/page/${page}`;
                }}
                />
    
            </div>
        </div>
        </>
    );
}

export default SearchPage;
