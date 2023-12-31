// /Volumes/SSD_1TB/next-antena2/front/src/pages/topSSR.js

import { useState, useEffect, useMemo } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/iiim.module.css'
import Sidebar from '@/components/Sidebar';
import Tags from '@/components/Tags';
import Pagination from '@/components/Pagination';
import { handleClickCount } from '@/lib/clickCountDB';

export default function Ssroriginal({ data, totalCount, page, limit }) {

    const itemIds = useMemo(() => data.map(item => item.id), [data]);
    const [items, setItems] = useState(itemIds);
    const [clickCounts, setClickCounts] = useState({});

    useEffect(() => {
        const fetchClickCounts = async () => {
            const response = await fetch('https://api.erorice.com/click_counts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(itemIds), 
            });
    
            if (!response.ok) {
                console.error(`Error fetching click counts: ${response.status} ${response.statusText}`);
                return;
            }
    
            const initialClickCounts = await response.json();
            setClickCounts(initialClickCounts);
        };
    
        if (Array.isArray(itemIds) && itemIds.every(Number.isInteger)) {
            fetchClickCounts();
        } else {
            console.error("itemIds must be an array of integers", itemIds);
        }
    }, [itemIds]);
    
    // console.log('ID一覧',itemIds);
    // console.log('クリックカウント数',clickCounts);
    // console.log('clickCountsの型:', typeof clickCounts);


    return (
        <div className='container mx-auto flex flex-col-reverse md:flex-row p-5 justify-between md:justify-start'>
            <Sidebar />
            <div className="md:w-3/4 md:ml-4 grid sm:grid-cols-1 md:grid-cols-2 gap-5 p-5 order-2 md:order-2">
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
                        <div key={index} className='my-1 px-4 border-gray-300 rounded-lg shadow-lg'>
                            <div className='border-b border-gray-200 m-3'>
                                <div onClick={() => {handleClickCount(item.id)}}>
                                <Link href="/item/[items]" as={`/${item.site_id}/${item.id}`}>
                                    <div className="p-4 relative">
                                        <Image fill src={item.imgurl} className={styles.image} alt={item.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                                        <p className='absolute top-0 left-0 bg-white opacity-75'>クリック数: {clickCounts[item.id] || 0}</p>
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
                <Pagination totalCount={totalCount} pageSize={limit} currentPage={page} pageChangeUrl={(page) => `/page/${page}`} />
            </div>
        </div>
    );
    
    
}
